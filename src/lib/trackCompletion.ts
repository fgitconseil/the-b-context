import { supabase } from './supabase';

export async function trackBlocCompletion(blocId: string): Promise<void> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return;

  await supabase.from('formation_progress').upsert({
    user_id: session.user.id,
    bloc_id: blocId,
    completed_at: new Date().toISOString(),
  });
}

export function observeEndScreen(blocId: string, onComplete: () => void): void {
  const endScreen = document.getElementById(`end-${blocId}`);
  if (!endScreen) return;

  let fired = false;
  const observer = new MutationObserver(() => {
    if (!fired && endScreen.style.display !== 'none') {
      fired = true;
      onComplete();
    }
  });
  observer.observe(endScreen, { attributes: true, attributeFilter: ['style'] });
}

const LS_KEY_PREFIX = 'reflexe-ia:slide-progress:';

export async function saveSlideProgress(blocId: string, slideIndex: number): Promise<void> {
  try {
    localStorage.setItem(`${LS_KEY_PREFIX}${blocId}`, String(slideIndex));
  } catch {
    // localStorage indisponible — on continue
  }

  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return;

  const now = new Date().toISOString();

  // Try UPDATE first — leaves completed_at untouched
  const { data: updated } = await supabase
    .from('formation_progress')
    .update({ current_slide: slideIndex, last_visited_at: now })
    .eq('user_id', session.user.id)
    .eq('bloc_id', blocId)
    .select('user_id');

  // No row yet → INSERT with completed_at = null (avoid DEFAULT now())
  if (!updated || updated.length === 0) {
    await supabase.from('formation_progress').insert({
      user_id: session.user.id,
      bloc_id: blocId,
      current_slide: slideIndex,
      last_visited_at: now,
      completed_at: null,
    });
  }
}

export async function loadSlideProgress(blocId: string): Promise<number> {
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    const { data } = await supabase
      .from('formation_progress')
      .select('current_slide')
      .eq('user_id', session.user.id)
      .eq('bloc_id', blocId)
      .maybeSingle();

    if (data?.current_slide != null) return data.current_slide;
  }

  try {
    const stored = localStorage.getItem(`${LS_KEY_PREFIX}${blocId}`);
    if (stored !== null) return Number.parseInt(stored, 10) || 0;
  } catch {
    // localStorage indisponible
  }

  return 0;
}

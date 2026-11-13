/**
 * Shared direction for every image brief on the site.
 *
 * The briefs ask for photographs, not illustrations: generated drawings
 * looked artificial, and instruments and playing posture are easier to
 * get right in a photographic style. Add a real reference photo of the
 * instrument or playing position when generating, as text alone often
 * gets details such as veena construction wrong.
 */
const baseStyle =
  'Candid documentary photograph with natural window light and realistic colours, in an ordinary comfortable south Indian home with understated surroundings. Not an illustration, painting, cartoon or 3D render. No text, logos or watermarks.';

/** For scenes with people. Adds skin, expression and posture direction. */
export function photoBrief(scene: string): string {
  return `${scene} ${baseStyle} Realistic skin texture, unposed natural expressions, and accurate instrument construction and playing posture.`;
}

/**
 * For instrument-only scenes. Leaves out the skin and expression
 * wording, which can lead the model to add people, and says so outright.
 */
export function objectBrief(scene: string): string {
  return `${scene} ${baseStyle} Accurate instrument construction. No people, hands or faces in the frame.`;
}

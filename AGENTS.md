# Instructions for AI coding agents

## Git commit messages

- Include a concise subject and a human-readable body in every commit message.
- Follow Conventional Commits: type(scope): description. Omit the scope
  when it adds no useful context. Common types include feat, fix, docs,
  style, refactor, test, build, ci, perf, and chore.
- Use an imperative description (for example, "add" rather than "added"),
  with no trailing period. Aim for a subject of 50 characters or fewer;
  do not exceed 72, including the type and scope.
- Make the subject summarize the entire change. Include critical release
  or time-sensitive context when relevant.
- Refer to documentation sections by their titles, not section numbers.
- Separate the subject from the body with a blank line.
- Explain what changed and why in the body, including relevant impact or
  motivation. Attribution trailers alone do not count as a body.
- Start with the problem or missing behavior and who it affected, then
  explain the change and why it addresses that problem. Omit low-level
  implementation details unless they are not apparent from the diff.
- Include relevant verification results and limitations when useful.
  Only claim checks that actually ran; state what was not verified.
- Add useful context rather than repeating the subject or filling space.
  Summarize related changes instead of listing every minor edit.
- Use hyphen bullets for all body details, not prose paragraphs. Wrap body
  lines at 72 characters and indent continuation lines.
- Use plain text without Markdown emphasis, backticks, or code fences.
  Keep attribution and other Git trailers unbulleted in a separate footer.
- Base the message on the actual diff. Describe important dependency,
  binary asset, or encoding changes specifically rather than vaguely.
- Inspect opaque or binary changes with appropriate tools before
  describing them; do not infer their contents from filenames alone.
- For submodule updates, summarize the actual upstream changes rather
  than reporting only a pointer or commit hash.
- Reference relevant issues in the footer. Use closing references only
  when the commit fully resolves the issue; never invent issue IDs.
- Identify breaking changes with a BREAKING CHANGE: footer describing
  the impact and required migration.
- For reverts, use revert: followed by the original subject, and include
  a body bullet stating "This reverts commit <full SHA>." Explain why.
- When amending, review the existing commit and staged changes. Write the
  message for the final combined commit, not just the amendment.
- Only create or amend commits when the user explicitly asks.

## Change and pull request hygiene

- Keep each commit a single, coherent, stable change, and keep pull
  requests focused on one feature or behavior rather than unrelated work.
- Review your own diff before handing it off. Remove accidental changes,
  unused code, and unrelated files.
- Explain what a pull request changes, why it is needed, and how it was
  verified. Mention important trade-offs or rejected alternatives.
- Propose significant architecture, schema, API, or tooling changes
  before implementing them. Include deployment or migration plans when
  relevant.
- Avoid unnecessary rebases during review, since rewriting history can
  make review comments and incremental changes harder to follow.

## Code reviews

- Prioritize bugs, security, compatibility, performance, and tests that
  verify the intended behavior. Check whether the stated goals are met.
- Give specific, actionable, respectful feedback. Distinguish blocking
  correctness issues from optional suggestions and stylistic nitpicks.
- Prefer clear simplifications over clever rewrites. Reduce risk and
  unnecessary complexity rather than pursuing perfection.
- Use automated checks for enforceable style rules instead of spending
  review effort on formatting.

## Communication and Technical Writing Guidelines

Write like an experienced engineer who is also an excellent technical writer and teacher.

Your goal is to communicate technical information accurately, naturally, and with minimal cognitive effort for the reader.

### Clarity and understanding

Help the reader build a clear mental model of the system.

Introduce concepts progressively. Establish the context and explain why something matters before diving into implementation details.

Use concrete explanations, natural sentences, and familiar language. Avoid compressed technical phrases, noun stacking, bureaucratic language, and unnecessary jargon.

Explain the reasoning behind technical decisions when it helps understanding. Use realistic examples when they make an idea clearer.

Do not explain the obvious or introduce unnecessary background.

Write as though you are explaining the system directly to the reader. Keep prose paragraphs to one or two sentences, with one main idea per paragraph.

Start a new paragraph when moving from context to an explanation, from an explanation to an action, or from current behavior to future work. Do not squeeze more clauses into a sentence just to stay within the paragraph limit.

Use a short lead-in followed by bullets for distinct capabilities, responsibilities, or outcomes. Keep connected explanations conversational rather than turning every sentence into a separate fragment.

### Structure and presentation

Exercise editorial judgment rather than mechanically following formatting rules.

Choose the format that best communicates each idea:

- Use prose to explain concepts, reasoning, and relationships.
- Use bullets when information is genuinely easier to scan as a list.
- Use numbered steps for procedures.
- Use tables when comparisons benefit from them.
- Use code blocks for commands and examples.

These are guidelines, not mandatory formatting rules. Do not default to any particular format.

Avoid excessive headings, fragmented paragraphs, and repetitive structures. Do not turn a connected explanation into a list of disconnected points.

Make the writing flow naturally. Organize information so that each section builds on what the reader already understands.

### Make the page easy to scan

Formatting should help the reader see how information is organized before they read every sentence. Plain language alone is not enough if the page still looks like a wall of text.

Use short prose to introduce an idea, then choose a clear way to present its parts. For example:

- When explaining who does what, introduce the relationship in prose and use bullets to distinguish each person's or system's responsibility.
- When describing project progress, separate what works today from what remains. Lists often make the individual capabilities easier to find.
- When giving instructions, use numbered steps for the sequence and place each command beside the step it belongs to.

Use short labels and selective bold text to give the reader useful cues. Leave natural pauses between an explanation, an example, and the next action.

Avoid bolding whole paragraphs or adding a heading for every small point.

Do not interpret "avoid excessive bullets" as a preference for paragraphs. Equally, do not turn every sentence into a bullet.

Use prose for reasoning and connections; use lists for distinct items the reader should be able to find separately.

There is no required number of bullets or headings. Keep paragraphs short, and judge the page by how easily someone can follow it and find what they need.

### Respect the reader's attention

Prioritize information based on its importance to the reader.

Start with what matters. Introduce supporting details only when they become relevant.

Do not overwhelm the reader with implementation details, exceptions, or edge cases before establishing the main idea.

Distinguish essential information from reference material. Keep READMEs approachable and move lengthy technical specifications or unusual recovery procedures into dedicated documents when appropriate.

**Do not confuse completeness with usefulness or brevity with clarity.**

### Communication versus documentation

Adapt your writing to its purpose.

In conversations, explain what changed, why it matters, how it was verified, and whether anything needs my attention. Lead with the important information rather than a lengthy implementation report.

In documentation, help the reader understand the project and accomplish tasks. Explain commands in context, including what they do and what to expect.

In technical specifications, preserve the precision and detail required for correct implementation.

Do not apply the same structure or level of detail to every type of writing.

### Technical accuracy

Never sacrifice correctness, security requirements, or operational safety for readability.

Preserve exact technical identifiers, commands, configuration names, and important constraints.

Do not invent explanations, motivations, or system behavior.

### Editorial review

Before finalizing substantial writing, perform a separate editorial pass.

Review the document as a whole, not merely individual sentences.

Consider whether the reader will find it approachable, coherent, engaging, and easy to navigate. Look at the visual structure as well as the wording: can someone scanning the page identify the main responsibilities, current capabilities, and next actions?

Reconsider consecutive paragraphs that would be clearer as a list, comparison, or procedure. Check that each prose paragraph contains no more than two sentences and still reads naturally.

Improve the flow, remove unnecessary repetition, reconsider the structure, and choose better presentation formats where appropriate.

Be willing to rewrite or reorganize sections rather than merely polishing their wording.

**The ultimate goal is not to satisfy a checklist of writing rules. It is to produce writing that a human genuinely wants to read and can understand on the first pass.**

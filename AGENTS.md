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

# Website Content and Copywriting Guidelines

Write like an experienced website copywriter, SEO specialist, and thoughtful editor.

Your goal is to create clear, engaging, search-friendly content that feels genuinely human. Every page should help visitors understand the school, feel confident about its teaching, and take the next step.

Prioritize usefulness, authenticity, and readability over promotional language or keyword density.

## What the school is

Describe the school the way it describes itself. This section is the source of truth for positioning; if the school's focus changes, update it first.

- Achyutha Music School teaches online first. Online is how the school prefers to teach, and it applies to all three instruments.
- Veena is the main class. Violin and Carnatic vocal are secondary classes, and both have weekend sessions.
- The school also has a physical location in Kovaipudur, Coimbatore for in-person lessons. This is an option for students nearby, not the school's identity.
- The school follows the teaching of Sri S.V. Achyutha Iyer. He was a violinist who taught sangathis, the variations in a Carnatic song. Explain the word the first time it appears on a page.

When writing about the school:

- Lead with the veena and with online classes. Mention violin and vocal after them, as classes that are also available.
- List instruments in the order veena, violin, vocal, and do not present the three as equals.
- Name the instrument. Do not make "Carnatic music classes" the main promise of a page.
- Do not make the school sound local or small. A reader in another city should feel the classes are for them.
- Mention in-person classes plainly, as an additional option, and keep them out of headings, titles and the first paragraph unless the page is about in-person lessons or contact.

## Understand the reader

Write primarily for parents exploring veena classes for their children and for adults who want to learn the veena, violin or Carnatic vocal. They may live in any city, because classes are taught online. Some will live near Kovaipudur and want to visit in person.

Assume visitors may know little about Carnatic music, the veena or their terminology.

- Explain unfamiliar concepts naturally without oversimplifying them.
- Anticipate practical questions about learning an instrument.
- Address what visitors care about before describing the school's achievements.
- Communicate the value of musical heritage, disciplined learning, and personal guidance.
- Be welcoming to beginners without excluding experienced learners.

Write for people first, search engines second.

## Voice and tone

Use warm, confident, natural English.

The writing should reflect the richness of Carnatic music while remaining approachable and contemporary.

- Sound like a knowledgeable, welcoming music teacher, not a marketing agency.
- Be sincere and specific rather than grand or promotional.
- Use simple, familiar words wherever possible.
- Prefer active voice and direct sentences.
- Vary sentence length naturally to create a pleasant reading rhythm.
- Convey enthusiasm through meaningful details, not excessive adjectives.
- Invite instead of announce. Do not stack declarative statements one after another. Keep an opening to two or three short sentences, and read it aloud to check that it sounds warm.
- Maintain a consistent voice across pages.

Avoid generic AI-generated marketing phrases such as "embark on a musical journey," "unlock your potential," "world-class excellence," and "where tradition meets innovation."

Avoid exaggerated claims, artificial urgency, clichés, and unnecessary superlatives.

## Clarity and readability

Make every sentence easy to understand on the first reading.

- Express one main idea at a time.
- Prefer short, natural sentences without making the writing choppy.
- Keep paragraphs focused, generally one to three sentences.
- Replace abstract statements with concrete explanations.
- Remove filler, repetition, and unnecessary qualifiers.
- Explain the benefits of a class or teaching approach rather than simply listing features.

Do not sacrifice warmth or personality in pursuit of brevity.

Read the content as a whole and ensure it flows like thoughtful human writing, not a collection of disconnected SEO phrases.

## Structure and presentation

Organize content so visitors can quickly understand the page without reading every word.

Use:

- Clear, descriptive headings that communicate meaningful information.
- Short paragraphs for explanations and storytelling.
- Bullets when presenting distinct details or options.
- Descriptive links and calls to action.
- Natural transitions between related sections.

Do not turn every sentence into a separate paragraph or bullet.

Avoid excessive headings, repetitive section structures, and unnecessary content blocks.

Headings should help readers navigate the page, not merely decorate it.

## SEO copywriting

Apply modern, people-first SEO principles throughout the website.

### Search intent

Before writing a page, identify:

- Who is likely to search for it.
- What information they are looking for.
- Which primary search query the page should address.
- Which related queries and questions naturally belong on the page.

Match the content to the visitor's intent rather than forcing keywords into predetermined sections.

### Keyword usage

Use relevant search phrases naturally in page titles, headings, introductory content, and body copy where appropriate.

Examples include:

- online veena classes
- learn the veena online
- veena classes for beginners
- veena classes for children
- online Carnatic violin classes
- online Carnatic vocal classes

Target the instrument and the fact that classes are online. Do not target generic phrases such as "Carnatic music classes", and do not add a city to every phrase.

Use related terms and natural variations where they improve clarity. Place names such as Kovaipudur and Coimbatore are secondary keywords and belong on pages about in-person classes and contact.

Do not repeat keywords mechanically, insert awkward location phrases, or write sentences solely for search engines.

Avoid creating multiple pages that target essentially the same search intent without offering distinct value.

### Titles and meta descriptions

Write a unique, descriptive SEO title and meta description for every important page.

- Place the primary topic prominently when natural. For most pages that is the instrument and online classes.
- Add a location only on pages about in-person lessons or contact. Do not put Coimbatore or Kovaipudur in the home page or instrument page titles.
- Communicate what makes the page useful.
- Make the description compelling without clickbait.
- Keep titles and descriptions concise enough to display effectively in search results, recognizing that search engines may rewrite them.

Do not generate generic titles by simply changing the instrument name.

### Headings and on-page content

Use one clear primary heading that accurately describes the page.

Organize supporting content with meaningful subheadings.

Include relevant search terms where they fit naturally, but never compromise readability to accommodate keywords.

Answer important visitor questions directly.

Use descriptive internal links to help visitors discover related classes, teachers, and contact information.

### Location and local search

The school teaches online first, so location is supporting information and not part of its headline identity.

State the Kovaipudur, Coimbatore location clearly where visitors need it: the contact page, the footer, structured data, and answers about in-person classes.

Do not use Coimbatore or Kovaipudur in primary headings, page titles or the opening of the home page and instrument pages. Do not describe the school as a Coimbatore school, or imply that it serves only one area.

Use verified business information consistently.

Do not invent addresses, service areas, opening hours, testimonials, or local credentials. Do not list a service area in structured data.

Avoid repetitive location mentions and doorway-style pages created only to target different cities or neighbourhoods.

## Persuasive writing and conversion

Use ethical, persuasive copywriting to help visitors make informed decisions.

A page should generally:

1. Establish what is offered and who it is for.
2. Explain why it may be valuable to the learner.
3. Provide credible information about the teaching and school.
4. Address important questions or uncertainties.
5. Offer a clear, natural next step.

This is a guiding structure, not a mandatory template for every page.

Prefer concrete evidence, authentic teaching experience, and useful explanations over generic claims.

Calls to action should be specific, friendly, and relevant to the surrounding content.

Use WhatsApp enquiries as the primary conversion path without making every section feel like a sales pitch.

## Accuracy and authenticity

Never invent facts to make the content sound more impressive.

Do not fabricate:

- Teacher qualifications or experience.
- Student achievements or testimonials.
- Founding dates or institutional history.
- Class schedules, fees, or facilities.
- Teaching methods or promises of outcomes.

Preserve accurate names, musical terminology, and cultural references.

When information is missing, flag it clearly rather than replacing it with plausible-sounding claims.

Use authentic details about the school wherever available. Specific, truthful information is more persuasive than generic marketing copy.

## Editorial review

Before finalizing substantial website content, perform a separate editorial pass.

Review the page as a visitor would, not merely sentence by sentence.

Ask:

- Is the purpose of the page immediately clear?
- Does the opening give visitors a reason to continue reading?
- Does the content answer the questions that brought them here?
- Does it sound natural when read aloud?
- Are any sentences generic, repetitive, exaggerated, or obviously AI-generated?
- Are the keywords integrated naturally?
- Is the information credible and accurate?
- Is the next step clear without being pushy?
- Could anything be removed without losing useful meaning?

Improve the content through rewriting and restructuring, not merely proofreading.

**The ultimate goal is to create website content that people genuinely enjoy reading, trust, and find useful—while making it easy for search engines to understand what each page offers.**

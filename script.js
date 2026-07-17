/* Engineering Notebook — logica sito (~60 righe) + dati traduzione.
   L'HTML contiene sempre l'EN completo: il JS sostituisce solo se lang=it. */

const translations = {
  en: {
    'a11y.skip': 'Skip to content',
    'nav.projects': 'Projects', 'nav.editing': 'Editing', 'nav.method': 'Method', 'nav.contact': 'Contact',
    'cmdbar.status': 'Available for junior roles', 'cmdbar.loc': 'Reggio Emilia, Italy',
    'toc.title': 'Index',
    'hero.status': 'Available for junior roles · Italy / Remote',
    'hero.subA': 'Merging ', 'hero.subAi': 'AI', 'hero.subB': ', ', 'hero.subDesign': 'Design',
    'hero.subC': ' & ', 'hero.subCode': 'Code', 'hero.subD': '.',
    'hero.lead': 'Junior Software Developer (AI-augmented) — every claim on this site links to a repository.',
    'hero.ctaPrimary': 'View my projects', 'hero.ctaCv': 'Download CV', 'hero.ctaContact': 'Or get in touch',
    'hero.scroll': 'scroll',
    'chip.now': '/now — building', 'chip.nowMeta': 'Server-authoritative action-RPG · 9 ADRs',
    'proof.p1': 'open-source projects', 'proof.p2': 'lines of tests',
    'work.title': 'Work',
    'status.active': 'Active', 'status.alpha': 'Alpha', 'status.done': 'Completed',
    'status.paused': 'Paused', 'status.paused2': 'Paused', 'status.paused3': 'Paused',
    'work.p1': "A desktop companion for Europa Universalis IV that reads the game's proprietary save format and its screen, not just its API.",
    'work.p2': 'A desktop cockpit for running Claude Code across Windows and WSL2 from one window, with a self-critical account of its own tech debt.',
    'work.p3': 'A multiplayer action-RPG on Roblox where the server, not the client, decides what actually happened.',
    'work.p4': 'A realtime deformable voxel engine that regenerates terrain 65% faster than its first working version.',
    'work.p5': 'A procedural evolutionary sandbox built test-first, with save files that survive their own migrations.',
    'work.p6': 'A video pipeline that turns one script into six published videos and nine language versions.',
    'method.title': 'Method',
    'method.l1': 'Spec → plan → test → audit — every project, every time.',
    'method.l2': 'Agents execute. I decide the architecture and write it down as ADRs.',
    'method.l3': 'claude-dashboard ships its own self-critical audit, in the same tone as its README.',
    'method.link': 'Read the full method',
    'timeline.title': 'Timeline',
    'timeline.bio': 'I\'m Aronne Zanichelli, a junior software developer working AI-augmented. I write code, but I also write the spec, the plan, and the audit around it — the discipline is the point, not just the output. My path here wasn\'t linear: a technical diploma, a year selling utility contracts, then a creative-and-AI program that put me inside a real production pipeline. Along the way I built six projects I still maintain — none of them portfolio filler; all of them on GitHub, with commits, tests, and the occasional documented mistake. I\'m looking for a first developer role, in Italy or abroad, where "I can prove it" counts for more than "I\'m passionate about it."',
    'timeline.t1': 'ITIS technical diploma (Perito Informatico) — completed July 2025.',
    'timeline.d2': 'May 2024 – Jul 2025',
    'timeline.t2': 'Optima — business sales consultant, freelance. Commercial soft skills: client relationships, negotiation, autonomy.',
    'timeline.n2': 'Not a technical role.',
    'timeline.d3': 'Oct 2025 – Jun 2026',
    'timeline.t3': 'IFTS Creative & AI — vocational program, concluded. Half coursework, half on-the-job at Labelbike.',
    'timeline.d4': 'Oct 2025 – Jun 2026',
    'timeline.t4': 'Labelbike — formally an internship, in practice an operational role with real delegation: creative/social/AI content pipeline plus development support (Java, C++, SQL).',
    'skills.title': 'Skills, with evidence',
    'skills.intro': 'No bars, no percentages — every skill below links to the project that proves it.',
    'skills.h1': 'Skill', 'skills.h2': 'Proven in',
    'skills.s1': 'recursive-descent parser, computer vision, 0.62 test ratio',
    'skills.s2': '10.4k-LOC desktop cockpit, 15MB JSONL streaming',
    'skills.s3': 'Marching Cubes/Transvoxel, threading, -65% regen time',
    'skills.s4': '7.4k lines, test-first with GUT, versioned saves',
    'skills.s5': 'server-authoritative architecture, 9 ADRs',
    'skills.s6': 'all six repos: branch-per-feature, documented decisions',
    'skills.s7': '(2.6k lines, 0.62 ratio) and', 'skills.s7b': '(test-first, GUT)',
    'skills.s8': 'dev support in a production context — not yet at project-ownership depth',
    'skills.s9k': 'Video editing, AI content',
    'skills.s9': '6 published videos, 9-language localization via agents',
    'contact.title': 'Get in touch',
    'contact.sub': 'Have a role, a project, or a question? Write me directly, or use the form below.',
    'contact.direct': 'Prefer email?', 'contact.cv': 'Download CV (PDF)',
    'contact.cvCaption': 'Click to open the PDF', 'contact.cvAlt': 'CV preview — first page',
    'form.name': 'Name', 'form.namePh': 'Your name',
    'form.email': 'Email', 'form.emailPh': 'you@email.com',
    'form.message': 'Message', 'form.messagePh': 'What would you like to talk about?',
    'form.send': 'Send message',
    'form.sending': 'Sending', 'form.required': 'This field is required.',
    'form.invalidEmail': 'Enter a valid email.',
    'form.success': "Message sent — thank you. I'll get back to you soon.",
    'form.network': 'Message not sent — check your connection and try again.',
    'footer.contactLabel': 'Contact', 'footer.github': 'View on GitHub', 'footer.linkedin': 'Connect on LinkedIn',
    'footer.colophon': 'Set in Space Grotesk, Inter & JetBrains Mono. Static HTML, no build step, no framework.',
    /* projects.html */
    'projects.title': 'Projects',
    'projects.intro': "Six repositories, in the order I'd want a reviewer to open them.",
    'repo.stack': 'Stack', 'repo.metric': 'Key metric', 'repo.status': 'Status', 'repo.link': 'Link',
    'repo.github': 'View on GitHub', 'repo.youtube': 'Watch on YouTube',
    'dossier.problem': 'Problem', 'dossier.approach': 'Approach', 'dossier.result': 'Result',
    'dossier.next': 'Next project',
    'p1.problem': 'EU4 exposes no API for reading a running game or hooking into external overlays: anyone building a companion tool has to reverse-engineer the save format and the screen itself.',
    'p1.approach': 'I wrote a recursive-descent parser for the proprietary Clausewitz format and a computer-vision module that reads UI elements outside the game, inside a PyQt6 desktop app.',
    'p1.result': '~4.2k LOC, 2.6k lines of tests (0.62 ratio), CI green across Python versions, PyInstaller installer. Status: alpha, active development.',
    'p2.problem': 'Running Claude Code on Windows means bouncing through WSL2 across scattered terminals, with no unified view of sessions and logs on either side.',
    'p2.approach': 'I built an Electron cockpit using node-pty for a real pty bridge between Windows and WSL2, streaming and parsing JSONL logs up to 15MB with list virtualization to stay smooth, plus a STRATEGIC_REVIEW that documents the tech debt honestly.',
    'p2.result': '~10.4k LOC, public self-audit (STRATEGIC_REVIEW). Status: short pause, known bug in progress.',
    'p3.problem': "A multiplayer action-RPG on Roblox is exposed by nature to compromised clients: if the client decides what's true, someone will exploit it.",
    'p3.approach': 'Server-authoritative architecture in Luau strict mode: the server validates every state-changing action, a data-driven registry manages items and abilities without touching code, 9 ADRs document the decisions made.',
    'p3.result': '~8.7k lines, 9 ADRs, anti-exploit architecture. Status: active.',
    'p4.problem': 'Realtime deformable voxel terrain that regenerates its mesh on the main thread stalls the frame rate on every edit.',
    'p4.approach': 'Marching Cubes and Transvoxel to generate mesh across LOD transitions, a producer/consumer threading model to move regeneration off the main thread, optimizations profiled and measured, not eyeballed.',
    'p4.result': '-65% regeneration time, measured with a profiler. Status: paused, resume planned.',
    'p5.problem': 'A procedural evolutionary sandbox lives or dies on world variety and on save files surviving across versions.',
    'p5.approach': 'Test-first development with GUT from the first commit, multi-layered noise generation for terrain, biome, and ecosystem, a versioned save system with explicit migrations between versions.',
    'p5.result': '~7.4k lines of GDScript, test-first from day one, versioned saves with migrations. Status: paused, resume planned.',
    'p6.intro': "Development is the core of what I do; creative and AI-content work is the differentiator that came with it. At Labelbike I ran a video pipeline that went from script to published upload, using AI tooling to localize every video into nine languages instead of one. It's not a hobby bolted onto a dev portfolio — it's a second skill set, proven the same way as the code: with published output, not a claim.",
    'p6.problem': 'Labelbike needed video content that could reach non-Italian audiences without hiring a translator and a second production team for every language.',
    'p6.approach': 'Built and ran an end-to-end video pipeline: scripting, editing, and an AI-agent-driven localization step that adapts each video — not just subtitles, full re-adaptation — into multiple languages, plus social cuts from the same source footage.',
    'p6.result': '6 videos published on YouTube, localized into 9 languages via agents. Completed with the Labelbike role (Oct 2025 – Jun 2026).',
    'p6.gallery': 'See the video gallery',
    /* metriche dossier */
    'm.tests': 'Test lines', 'm.ciMulti': 'green across Python versions', 'm.packaging': 'Packaging',
    'm.streaming': 'Log streaming', 'm.audit': 'Self-audit',
    'm.lines': 'Lines', 'm.lines2': 'Lines', 'm.arch': 'Architecture',
    'm.regen': 'Regen time', 'm.meshing': 'Meshing',
    'm.testfw': 'Test framework', 'm.saves': 'Save system', 'm.savesV': 'versioned, explicit migrations',
    'm.videos': 'Published videos', 'm.langs': 'Languages', 'm.langsWord': 'languages',
    'm.viaAgents': 'via AI-agent localization', 'm.dist': 'Distribution',
    /* method.html */
    'mpage.title': 'Method',
    'mpage.p1': "Every project on this site follows the same loop: spec, plan, test, audit. I write the spec before I write code — what the thing needs to do, and what it explicitly doesn't. Then a plan, broken into steps small enough to review before they're built. AI agents write a meaningful share of the resulting code, but they work from my spec and my plan, not the other way around: the architectural decisions are mine — in BleaBox they're recorded as nine ADRs, so the reasoning survives past the commit that implemented it.",
    'mpage.p2': "Testing isn't a separate phase bolted on at the end; it's written alongside the feature, which is why eu4-assistant carries 2.6k lines of tests against 4.2k of implementation. And the loop doesn't end at green tests. claude-dashboard ships with a STRATEGIC_REVIEW — a self-audit that names its own tech debt and half-finished corners in the same tone as its README, because a build that only shows its wins isn't a status report, it's a highlight reel.",
    'mpage.p3': 'AI-augmented doesn\'t mean AI-decided; it means I orchestrate agents the way a lead orchestrates a team — clear brief, checked output, documented reasoning.',
    'mpage.adrLink': 'View the ADRs on GitHub', 'mpage.testLink': 'See the test suite', 'mpage.auditLink': 'Read the STRATEGIC_REVIEW',
    'mpage.closing': 'The decisions are mine; the AI multiplies execution.',
    'mpage.exit': 'Back to the projects',
    /* editing.html */
    'edit.title': 'Editing',
    'edit.intro': 'Post-production work, organised by client. Every video below is published output — not a showreel.',
    'edit.postprodLabel': 'Post-production scope: ',
    'edit.postprodText': 'Full pipeline handled end-to-end — editing, upload, titles, descriptions, keyword research, custom thumbnails, timestamps, and multilingual translation across 9 languages via a custom AI agent.',
    'edit.soon': 'soon', 'edit.soon2': 'soon',
    'edit.noResults': 'No videos match the selected filters.',
    /* 404 */
    'nf.title': 'Page not found',
    'nf.msg': "This page doesn't exist — or moved. The old Labelbike page now lives inside Projects; video work is under Editing.",
    'nf.cta': 'Back to home'
  },
  it: {
    'a11y.skip': 'Vai al contenuto',
    'nav.projects': 'Progetti', 'nav.editing': 'Editing', 'nav.method': 'Metodo', 'nav.contact': 'Contatti',
    'cmdbar.status': 'Disponibile per ruoli junior', 'cmdbar.loc': 'Reggio Emilia, Italia',
    'toc.title': 'Indice',
    'hero.status': 'Disponibile per ruoli junior · Italia / Remoto',
    'hero.subA': 'Unisco ', 'hero.subAi': 'AI', 'hero.subB': ', ', 'hero.subDesign': 'Design',
    'hero.subC': ' e ', 'hero.subCode': 'Codice', 'hero.subD': '.',
    'hero.lead': 'Sviluppatore Software Junior (AI-augmented) — ogni affermazione di questo sito punta a un repository.',
    'hero.ctaPrimary': 'Vedi i miei progetti', 'hero.ctaCv': 'Scarica il CV', 'hero.ctaContact': 'Oppure scrivimi',
    'hero.scroll': 'scorri',
    'chip.now': '/now — in sviluppo', 'chip.nowMeta': 'Action-RPG server-authoritative · 9 ADR',
    'proof.p1': 'progetti open source', 'proof.p2': 'righe di test',
    'work.title': 'Progetti',
    'status.active': 'Attivo', 'status.alpha': 'Alpha', 'status.done': 'Concluso',
    'status.paused': 'In pausa', 'status.paused2': 'In pausa', 'status.paused3': 'In pausa',
    'work.p1': 'Un companion desktop per Europa Universalis IV che legge il formato di salvataggio proprietario del gioco e lo schermo, non solo la sua API.',
    'work.p2': 'Una cockpit desktop per usare Claude Code tra Windows e WSL2 da un\'unica finestra, con un resoconto autocritico del proprio debito tecnico.',
    'work.p3': 'Un action-RPG multiplayer su Roblox dove è il server, non il client, a decidere cosa è realmente accaduto.',
    'work.p4': 'Un motore voxel deformabile in tempo reale che rigenera il terreno il 65% più veloce della sua prima versione funzionante.',
    'work.p5': 'Un sandbox evolutivo procedurale costruito test-first, con salvataggi che sopravvivono alle proprie migrazioni.',
    'work.p6': 'Una pipeline video che trasforma uno script in sei video pubblicati e nove versioni linguistiche.',
    'method.title': 'Metodo',
    'method.l1': 'Spec → plan → test → audit — per ogni progetto, sempre.',
    'method.l2': 'Gli agenti eseguono. Le decisioni architetturali e gli ADR sono miei.',
    'method.l3': 'claude-dashboard include un self-audit critico, con lo stesso tono del suo README.',
    'method.link': 'Leggi il metodo completo',
    'timeline.title': 'Timeline',
    'timeline.bio': 'Sono Aronne Zanichelli, sviluppatore junior con metodo AI-augmented. Scrivo codice, ma scrivo anche la spec, il piano e l\'audit che lo circondano — la disciplina è il punto, non solo il risultato. Il percorso non è stato lineare: un diploma tecnico, un anno a vendere contratti utility, poi un percorso creative & AI che mi ha messo dentro una pipeline di produzione reale. Nel frattempo ho costruito sei progetti che mantengo tuttora — nessuno è riempitivo da portfolio: sono tutti su GitHub, con commit, test e qualche errore documentato. Cerco un primo ruolo da sviluppatore, in Italia o all\'estero, dove "posso dimostrarlo" conti più di "ci metto passione".',
    'timeline.t1': 'Diploma ITIS, Perito Informatico — conseguito a luglio 2025.',
    'timeline.d2': 'Mag 2024 – Lug 2025',
    'timeline.t2': 'Optima — consulente commerciale, libero professionista. Soft skill commerciali: relazione con il cliente, negoziazione, autonomia.',
    'timeline.n2': 'Non è un ruolo tecnico.',
    'timeline.d3': 'Ott 2025 – Giu 2026',
    'timeline.t3': 'IFTS Creative & AI — percorso formativo, concluso. Metà lezione, metà lavoro operativo in Labelbike.',
    'timeline.d4': 'Ott 2025 – Giu 2026',
    'timeline.t4': 'Labelbike — formalmente uno stage, di fatto un ruolo operativo con deleghe reali: pipeline creative/social/AI content più supporto allo sviluppo (Java, C++, SQL).',
    'skills.title': 'Competenze, con le prove',
    'skills.intro': 'Niente barre, niente percentuali — ogni competenza qui sotto rimanda al progetto che la dimostra.',
    'skills.h1': 'Competenza', 'skills.h2': 'Provata in',
    'skills.s1': 'parser ricorsivo, computer vision, ratio test 0.62',
    'skills.s2': 'cockpit desktop da 10.4k LOC, streaming JSONL da 15MB',
    'skills.s3': 'Marching Cubes/Transvoxel, threading, -65% sul tempo di rigenerazione',
    'skills.s4': '7.4k righe, test-first con GUT, salvataggi versionati',
    'skills.s5': 'architettura server-authoritative, 9 ADR',
    'skills.s6': 'tutti i sei repository: branch per feature, decisioni documentate',
    'skills.s7': '(2.6k righe, ratio 0.62) e', 'skills.s7b': '(test-first, GUT)',
    'skills.s8': 'supporto allo sviluppo in produzione — non ancora a livello di ownership di progetto',
    'skills.s9k': 'Video editing, AI content',
    'skills.s9': '6 video pubblicati, localizzazione in 9 lingue tramite agenti',
    'contact.title': 'Contatti',
    'contact.sub': 'Hai un ruolo, un progetto o una domanda? Scrivimi direttamente, oppure usa il modulo qui sotto.',
    'contact.direct': 'Preferisci l\'email?', 'contact.cv': 'Scarica il CV (PDF)',
    'contact.cvCaption': 'Clicca per aprire il PDF', 'contact.cvAlt': 'Anteprima del CV — prima pagina',
    'form.name': 'Nome', 'form.namePh': 'Il tuo nome',
    'form.email': 'Email', 'form.emailPh': 'tu@email.com',
    'form.message': 'Messaggio', 'form.messagePh': 'Di cosa vorresti parlare?',
    'form.send': 'Invia messaggio',
    'form.sending': 'Invio', 'form.required': 'Campo obbligatorio.',
    'form.invalidEmail': 'Inserisci un\'email valida.',
    'form.success': 'Messaggio inviato — grazie. Ti risponderò a breve.',
    'form.network': 'Messaggio non inviato — controlla la connessione e riprova.',
    'footer.contactLabel': 'Contatti', 'footer.github': 'Vedi su GitHub', 'footer.linkedin': 'Collegati su LinkedIn',
    'footer.colophon': 'Composto in Space Grotesk, Inter e JetBrains Mono. HTML statico, zero build step, zero framework.',
    /* projects.html */
    'projects.title': 'Progetti',
    'projects.intro': 'Sei repository, nell\'ordine in cui vorrei che un revisore le aprisse.',
    'repo.stack': 'Stack', 'repo.metric': 'Metrica chiave', 'repo.status': 'Stato', 'repo.link': 'Link',
    'repo.github': 'Vedi su GitHub', 'repo.youtube': 'Guarda su YouTube',
    'dossier.problem': 'Problema', 'dossier.approach': 'Approccio', 'dossier.result': 'Risultato',
    'dossier.next': 'Progetto successivo',
    'p1.problem': 'EU4 non espone un\'API per leggere partite in corso o interagire con overlay esterni: chi vuole un companion tool deve capirsi da solo il formato di salvataggio e lo schermo di gioco.',
    'p1.approach': 'Ho scritto un parser ricorsivo per il formato proprietario Clausewitz e un modulo di computer vision che legge elementi UI esterni al gioco, dentro un\'app desktop PyQt6.',
    'p1.result': '~4.2k righe di codice, 2.6k di test (ratio 0.62), CI verde su più versioni Python, installer PyInstaller. Stato: alpha, sviluppo attivo.',
    'p2.problem': 'Chi usa Claude Code su Windows passa da WSL2 con terminali sparsi, nessuna vista unificata di sessioni e log tra i due mondi.',
    'p2.approach': 'Ho costruito una cockpit Electron con node-pty per un pty reale tra Windows e WSL2, streaming e parsing di log JSONL fino a 15MB con liste virtualizzate per restare fluido, e uno STRATEGIC_REVIEW che documenta onestamente il debito tecnico.',
    'p2.result': '~10.4k righe di codice, self-audit pubblico (STRATEGIC_REVIEW). Stato: pausa breve, bug noto in lavorazione.',
    'p3.problem': 'Un action-RPG multiplayer su Roblox è esposto per natura a client compromessi: se il client decide cosa è vero, qualcuno lo sfrutterà.',
    'p3.approach': 'Architettura server-authoritative in Luau strict mode: il server valida ogni azione che cambia stato, un registry data-driven gestisce oggetti e abilità senza toccare il codice, 9 ADR documentano le decisioni prese.',
    'p3.result': '~8.7k righe, 9 ADR, architettura anti-exploit. Stato: attivo.',
    'p4.problem': 'Un terreno voxel deformabile in tempo reale che rigenera la mesh sul thread principale blocca il frame rate a ogni modifica.',
    'p4.approach': 'Marching Cubes e Transvoxel per generare la mesh tra livelli di dettaglio, threading producer/consumer per spostare la rigenerazione fuori dal thread principale, ottimizzazioni profilate e misurate, non stimate a occhio.',
    'p4.result': '-65% sul tempo di rigenerazione, misurato col profiler. Stato: in pausa, ripresa prevista.',
    'p5.problem': 'Un sandbox evolutivo procedurale vive o muore sulla varietà dei mondi generati e sulla tenuta dei salvataggi tra versioni successive.',
    'p5.approach': 'Sviluppo test-first con GUT fin dal primo commit, generazione multi-noise per terreno/bioma/ecosistema, sistema di salvataggio versionato con migrazioni esplicite tra versioni.',
    'p5.result': '~7.4k righe GDScript, test-first dal giorno uno, salvataggi versionati con migrazioni. Stato: in pausa, ripresa prevista.',
    'p6.intro': 'Lo sviluppo è il centro di quello che faccio; il lato creative & AI content è il differenziatore che ci si è aggiunto. In Labelbike ho gestito una pipeline video che andava dallo script alla pubblicazione, usando strumenti AI per localizzare ogni video in nove lingue invece che una sola. Non è un hobby appiccicato a un portfolio da developer: è una seconda competenza, provata allo stesso modo del codice — con output pubblicato, non con un\'affermazione.',
    'p6.problem': 'Labelbike aveva bisogno di contenuti video capaci di raggiungere pubblico non italiano, senza assumere un traduttore e un secondo team di produzione per ogni lingua.',
    'p6.approach': 'Ho costruito e gestito una pipeline video end-to-end: scripting, editing e una fase di localizzazione guidata da agenti AI che adatta ogni video — non solo i sottotitoli, l\'intero adattamento — in più lingue, più tagli social dagli stessi girati.',
    'p6.result': '6 video pubblicati su YouTube, localizzati in 9 lingue tramite agenti. Concluso con il ruolo in Labelbike (Ott 2025 – Giu 2026).',
    'p6.gallery': 'Guarda la galleria video',
    /* metriche dossier */
    'm.tests': 'Righe di test', 'm.ciMulti': 'verde su più versioni Python', 'm.packaging': 'Packaging',
    'm.streaming': 'Streaming log', 'm.audit': 'Self-audit',
    'm.lines': 'Righe', 'm.lines2': 'Righe', 'm.arch': 'Architettura',
    'm.regen': 'Tempo di rigenerazione', 'm.meshing': 'Meshing',
    'm.testfw': 'Framework di test', 'm.saves': 'Salvataggi', 'm.savesV': 'versionati, migrazioni esplicite',
    'm.videos': 'Video pubblicati', 'm.langs': 'Lingue', 'm.langsWord': 'lingue',
    'm.viaAgents': 'con localizzazione via agenti AI', 'm.dist': 'Distribuzione',
    /* method.html */
    'mpage.title': 'Metodo',
    'mpage.p1': 'Ogni progetto di questo sito segue lo stesso ciclo: spec, plan, test, audit. Scrivo la spec prima del codice — cosa deve fare la cosa, e cosa esplicitamente non deve fare. Poi un piano, diviso in passi abbastanza piccoli da poter essere rivisti prima di essere costruiti. Gli agenti AI scrivono una parte consistente del codice risultante, ma lavorano sulla mia spec e sul mio piano, non il contrario: le decisioni architetturali sono mie — in BleaBox sono registrate come nove ADR, perché il ragionamento sopravviva al commit che lo ha implementato.',
    'mpage.p2': 'Il testing non è una fase separata aggiunta alla fine: si scrive insieme alla feature, ed è per questo che eu4-assistant porta 2.6k righe di test contro 4.2k di implementazione. E il ciclo non finisce quando i test sono verdi. claude-dashboard include uno STRATEGIC_REVIEW — un self-audit che nomina il proprio debito tecnico e gli angoli lasciati a metà con lo stesso tono del README, perché un progetto che mostra solo le vittorie non è un report di stato: è un trailer.',
    'mpage.p3': 'AI-augmented non vuol dire deciso dall\'AI; vuol dire orchestrare gli agenti come un lead orchestra un team — brief chiaro, output verificato, ragionamento documentato.',
    'mpage.adrLink': 'Vedi gli ADR su GitHub', 'mpage.testLink': 'Vedi la suite di test', 'mpage.auditLink': 'Leggi lo STRATEGIC_REVIEW',
    'mpage.closing': 'Le decisioni le prendo io; l\'AI moltiplica l\'esecuzione.',
    'mpage.exit': 'Torna ai progetti',
    /* editing.html */
    'edit.title': 'Editing',
    'edit.intro': 'Lavori di post-produzione, organizzati per cliente. Ogni video qui sotto è output pubblicato — non uno showreel.',
    'edit.postprodLabel': 'Scope post-produzione: ',
    'edit.postprodText': 'Pipeline gestita interamente — editing, upload, titoli, descrizioni, keyword research, thumbnail personalizzate, timestamp e traduzione in 9 lingue tramite un agente AI custom.',
    'edit.soon': 'presto', 'edit.soon2': 'presto',
    'edit.noResults': 'Nessun video corrisponde ai filtri selezionati.',
    /* 404 */
    'nf.title': 'Pagina non trovata',
    'nf.msg': 'Questa pagina non esiste — o si è spostata. La vecchia pagina Labelbike ora vive dentro Progetti; i lavori video sono in Editing.',
    'nf.cta': 'Torna alla home'
  }
};

/* ---------- i18n ---------- */
function applyLang(lang) {
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (dict[el.dataset.i18n] !== undefined) el.textContent = dict[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    if (dict[el.dataset.i18nPh] !== undefined) el.placeholder = dict[el.dataset.i18nPh];
  });
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  const cv = document.getElementById('cvLink');
  if (cv) cv.href = 'assets/cv-' + lang + '.pdf';
  const heroCv = document.getElementById('cvHero');
  if (heroCv) heroCv.href = 'assets/cv-' + lang + '.pdf';
  const pvLink = document.getElementById('cvPreviewLink');
  if (pvLink) pvLink.href = 'assets/cv-' + lang + '.pdf';
  const pvImg = document.getElementById('cvPreviewImg');
  if (pvImg) { pvImg.src = 'assets/cv-' + lang + '.webp'; pvImg.alt = dict['contact.cvAlt']; }
}

/* ---------- Scrollspy TOC (index.html) ---------- */
function initScrollspy() {
  const toc = document.querySelector('.toc');
  if (!toc) return;
  const links = new Map([...toc.querySelectorAll('a[href^="#"]')].map(a => [a.hash.slice(1), a]));
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(l => l.classList.remove('is-active'));
    links.get(e.target.id).classList.add('is-active');
  }), { rootMargin: '-40% 0px -55% 0px' });
  links.forEach((_, id) => {
    const s = document.getElementById(id);
    if (s) io.observe(s);
  });
}

/* ---------- Filtri video (editing.html) ---------- */
function initVideoFilters() {
  const chips = [...document.querySelectorAll('.filter-chip:not([disabled])')];
  if (!chips.length) return;
  const cards = [...document.querySelectorAll('.video-card')];
  const empty = document.getElementById('noResults');
  const apply = () => {
    const active = chips.filter(c => c.getAttribute('aria-pressed') === 'true')
      .map(c => c.dataset.filter);
    let shown = 0;
    cards.forEach(card => {
      const on = !active.length || active.some(t => card.dataset.tags.split(' ').includes(t));
      card.hidden = !on; /* set vuoto = nessun filtro = tutte visibili */
      if (on) shown++;
    });
    empty.hidden = shown > 0;
  };
  chips.forEach(c => c.addEventListener('click', () => {
    c.setAttribute('aria-pressed', String(c.getAttribute('aria-pressed') !== 'true'));
    apply();
  }));
}

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') === 'it' ? 'it' : 'en';
  if (lang === 'it') applyLang('it');
  else document.querySelectorAll('.lang-btn').forEach(b =>
    b.setAttribute('aria-pressed', String(b.dataset.lang === 'en')));
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.addEventListener('click', () => applyLang(b.dataset.lang)));

  initScrollspy();
  initVideoFilters();

  /* Toggle tema — dark è il default, l'attributo marca il light ("pressed" = light) */
  const toggle = document.getElementById('themeToggle');
  const setTheme = light => {
    if (light) document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', light ? 'light' : 'dark');
    toggle.textContent = light ? '☾' : '☀';
    toggle.setAttribute('aria-pressed', String(light));
  };
  toggle.textContent = document.documentElement.hasAttribute('data-theme') ? '☾' : '☀';
  toggle.setAttribute('aria-pressed', String(document.documentElement.hasAttribute('data-theme')));
  toggle.addEventListener('click', () =>
    setTheme(!document.documentElement.hasAttribute('data-theme')));

  /* Reveal allo scroll — classi applicate a runtime: senza JS tutto è visibile */
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const targets = document.querySelectorAll('.section, .project-row, .dossier');
    targets.forEach(el => el.classList.add('reveal-init'));
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const row = el.matches('.project-row');
      const delay = row ? [...el.parentElement.querySelectorAll('.project-row')].indexOf(el) * 60 : 0;
      setTimeout(() => el.classList.add('reveal-in'), delay);
      io.unobserve(el);
    }), { rootMargin: '0px 0px -10% 0px' });
    targets.forEach(el => io.observe(el));
  }

  /* Form Formspree — validazione inline vs errore rete */
  const form = document.getElementById('contactForm');
  if (!form) return;
  const banner = form.querySelector('.form-banner-error');
  const success = form.querySelector('.form-success');
  const btn = form.querySelector('button[type=submit]');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const lang2 = localStorage.getItem('lang') === 'it' ? 'it' : 'en';
    const t = translations[lang2];
    banner.hidden = true;
    let valid = true;
    form.querySelectorAll('.field').forEach(f => {
      const input = f.querySelector('input, textarea');
      const msg = f.querySelector('.error-msg');
      let err = '';
      if (!input.value.trim()) err = t['form.required'];
      else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) err = t['form.invalidEmail'];
      f.classList.toggle('is-error', !!err);
      input.setAttribute('aria-invalid', String(!!err));
      msg.textContent = err;
      msg.hidden = !err;
      if (err) valid = false;
    });
    if (!valid) { form.querySelector('[aria-invalid="true"]').focus(); return; }
    btn.disabled = true;
    let i = 0;
    const tick = setInterval(() => { btn.textContent = t['form.sending'] + '.'.repeat(i++ % 3 + 1); }, 400);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      clearInterval(tick);
      if (!res.ok) throw new Error(res.status);
      form.querySelectorAll('.field, button').forEach(el => el.hidden = true);
      success.textContent = t['form.success'];
      success.hidden = false;
      success.tabIndex = -1;
      success.focus(); /* il submit nascosto perderebbe il focus; così lo SR annuncia l'esito */
    } catch {
      clearInterval(tick);
      btn.disabled = false;
      btn.textContent = t['form.send'];
      banner.textContent = t['form.network'];
      banner.hidden = false;
    }
  });
});

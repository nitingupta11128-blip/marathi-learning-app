/* ========================================
   बोला! (Bola!) — Levels 2, 3, 4 Data
   ======================================== */

const LEVELS = [
    { id: 0, title_mr: 'मूलभूत', title_en: 'Basics', badge: 'BEGINNER', color: '#FF6B35', icon: '🏮', lessonsKey: 'LESSONS' },
    { id: 1, title_mr: 'पाया', title_en: 'Foundation', badge: 'ELEMENTARY', color: '#3B82F6', icon: '📘', lessonsKey: 'LESSONS_L2' },
    { id: 2, title_mr: 'संवाद', title_en: 'Conversation', badge: 'INTERMEDIATE', color: '#8B5CF6', icon: '💬', lessonsKey: 'LESSONS_L3' },
    { id: 3, title_mr: 'प्रगत', title_en: 'Advanced', badge: 'ADVANCED', color: '#EF4444', icon: '🎓', lessonsKey: 'LESSONS_L4' },
];

// ===== LEVEL 2: FOUNDATION =====
const LESSONS_L2 = [
    {
        id: 0, title_mr: 'सर्वनामे', title_en: 'Pronouns', desc: 'I, You, He, She', icon: '👤', xp: 30, words: 8,
        steps: [
            { type:'teach', character:'मी', romanized:'mi', meaning:'I / Me', example:'मी जातो (I go)', audio:'mi' },
            { type:'teach', character:'तू', romanized:'tu', meaning:'You (informal)', example:'तू कुठे जातोस? (Where do you go?)', audio:'tu' },
            { type:'teach', character:'तो', romanized:'to', meaning:'He / That (masc)', example:'तो मुलगा आहे (He is a boy)', audio:'to' },
            { type:'teach', character:'ती', romanized:'ti', meaning:'She / That (fem)', example:'ती मुलगी आहे (She is a girl)', audio:'ti' },
            { type:'mcq', question:'What does "मी" mean?', prompt:'मी', options:['You','He','I','She'], correct:2 },
            { type:'teach', character:'आम्ही', romanized:'aamhi', meaning:'We (exclusive)', example:'आम्ही जातो (We go)', audio:'aamhi' },
            { type:'teach', character:'तुम्ही', romanized:'tumhi', meaning:'You (formal/plural)', example:'तुम्ही कसे आहात? (How are you?)', audio:'tumhi' },
            { type:'teach', character:'ते', romanized:'te', meaning:'They / Those', example:'ते शाळेत जातात (They go to school)', audio:'te' },
            { type:'mcq', question:'Which is formal "You"?', prompt:'🤝', options:['तू','मी','तुम्ही','ते'], correct:2 },
            { type:'match', question:'Match pronouns:', pairs:[{left:'मी',right:'I'},{left:'तू',right:'You'},{left:'तो',right:'He'},{left:'ती',right:'She'}] },
            { type:'cultural', emoji:'🙏', title:'Formal vs Informal', text:'Marathi has a respect system in pronouns! "तू" is informal (friends, kids), while "तुम्ही" is formal (elders, strangers). Using "तुम्ही" shows respect — very important in Maharashtrian culture!' }
        ]
    },
    {
        id: 1, title_mr: 'क्रियापदे', title_en: 'Common Verbs', desc: 'Basic action words', icon: '🏃', xp: 30, words: 10,
        steps: [
            { type:'teach', character:'जाणे', romanized:'jaane', meaning:'To go', example:'मी शाळेत जातो (I go to school)', audio:'jaane' },
            { type:'teach', character:'येणे', romanized:'yene', meaning:'To come', example:'तू घरी ये (Come home)', audio:'yene' },
            { type:'teach', character:'खाणे', romanized:'khaane', meaning:'To eat', example:'मी जेवण खातो (I eat food)', audio:'khaane' },
            { type:'teach', character:'पिणे', romanized:'pine', meaning:'To drink', example:'पाणी पी (Drink water)', audio:'pine' },
            { type:'mcq', question:'What does "खाणे" mean?', prompt:'खाणे', options:['To go','To eat','To drink','To come'], correct:1 },
            { type:'teach', character:'बोलणे', romanized:'bolne', meaning:'To speak', example:'मराठी बोला! (Speak Marathi!)', audio:'bolne' },
            { type:'teach', character:'करणे', romanized:'karne', meaning:'To do', example:'काम कर (Do work)', audio:'karne' },
            { type:'teach', character:'पाहणे', romanized:'paahne', meaning:'To see / watch', example:'चित्रपट पाहा (Watch a movie)', audio:'paahne' },
            { type:'teach', character:'ऐकणे', romanized:'aikne', meaning:'To listen', example:'गाणे ऐका (Listen to a song)', audio:'aikne' },
            { type:'mcq', question:'Which means "To speak"?', prompt:'🗣️', options:['करणे','ऐकणे','बोलणे','पाहणे'], correct:2 },
            { type:'match', question:'Match verbs:', pairs:[{left:'जाणे',right:'To go'},{left:'खाणे',right:'To eat'},{left:'बोलणे',right:'To speak'},{left:'ऐकणे',right:'To listen'}] },
            { type:'cultural', emoji:'📖', title:'Verb Roots in Marathi', text:'Marathi verbs end in "-णे" in their base form (infinitive). "खाणे" (to eat), "जाणे" (to go). When conjugated, they change based on gender, number, and tense — making Marathi verbs very expressive!' }
        ]
    },
    {
        id: 2, title_mr: 'साधी वाक्ये', title_en: 'Simple Sentences', desc: 'Subject-Object-Verb', icon: '📝', xp: 35, words: 8,
        steps: [
            { type:'teach', character:'मी आहे', romanized:'mi aahe', meaning:'I am', example:'मी विद्यार्थी आहे (I am a student)', audio:'mi aahe' },
            { type:'teach', character:'हे आहे', romanized:'he aahe', meaning:'This is', example:'हे पुस्तक आहे (This is a book)', audio:'he aahe' },
            { type:'teach', character:'मला आवडते', romanized:'mala avadte', meaning:'I like', example:'मला चहा आवडतो (I like tea)', audio:'mala avadte' },
            { type:'teach', character:'मला हवे', romanized:'mala have', meaning:'I want', example:'मला पाणी हवे आहे (I want water)', audio:'mala have' },
            { type:'mcq', question:'How do you say "I am"?', prompt:'I am = ?', options:['मी आहे','तू आहे','हे आहे','ते आहे'], correct:0 },
            { type:'teach', character:'माझे नाव', romanized:'mazhe naav', meaning:'My name', example:'माझे नाव राहुल आहे (My name is Rahul)', audio:'mazhe naav' },
            { type:'teach', character:'कुठे आहे', romanized:'kuthe aahe', meaning:'Where is', example:'शाळा कुठे आहे? (Where is the school?)', audio:'kuthe aahe' },
            { type:'mcq', question:'How to say "I like tea"?', prompt:'☕', options:['मी चहा खातो','मला चहा आवडतो','चहा हवे','मी चहा आहे'], correct:1 },
            { type:'fill', question:'Complete:', sentence:'माझे ___ राहुल आहे (My name is Rahul)', answer:'नाव', options:['घर','नाव','काम','पुस्तक'] },
            { type:'match', question:'Match sentences:', pairs:[{left:'मी आहे',right:'I am'},{left:'मला हवे',right:'I want'},{left:'मला आवडते',right:'I like'},{left:'कुठे आहे',right:'Where is'}] },
            { type:'cultural', emoji:'🗣️', title:'SOV Word Order', text:'Marathi follows Subject-Object-Verb (SOV) order unlike English (SVO). "मी चहा पितो" literally means "I tea drink." This is similar to Japanese and Korean word order!' }
        ]
    },
    {
        id: 3, title_mr: 'लिंग', title_en: 'Gender System', desc: 'Masculine, Feminine, Neuter', icon: '⚖️', xp: 35, words: 10,
        steps: [
            { type:'teach', character:'मुलगा', romanized:'mulgaa', meaning:'Boy (masculine)', example:'मुलगा चांगला आहे (The boy is good)', audio:'mulgaa' },
            { type:'teach', character:'मुलगी', romanized:'mulgi', meaning:'Girl (feminine)', example:'मुलगी हुशार आहे (The girl is smart)', audio:'mulgi' },
            { type:'teach', character:'मूल', romanized:'mool', meaning:'Child (neuter)', example:'मूल खेळते (The child plays)', audio:'mool' },
            { type:'teach', character:'मोठा / मोठी / मोठे', romanized:'mothaa/mothi/mothe', meaning:'Big (m/f/n)', example:'Gender changes adjective endings!', audio:'mothaa' },
            { type:'mcq', question:'What gender is "मुलगी"?', prompt:'मुलगी', options:['Masculine','Neuter','Feminine','Plural'], correct:2 },
            { type:'teach', character:'चांगला / चांगली / चांगले', romanized:'chaanglaa/chaagli/changle', meaning:'Good (m/f/n)', example:'चांगला मुलगा, चांगली मुलगी', audio:'chaanglaa' },
            { type:'teach', character:'माझा / माझी / माझे', romanized:'mazhaa/mazhi/mazhe', meaning:'My (m/f/n)', example:'माझा भाऊ, माझी बहीण, माझे घर', audio:'mazhaa' },
            { type:'mcq', question:'"माझी" is used for?', prompt:'माझी ___', options:['Masculine nouns','Feminine nouns','Neuter nouns','Plural nouns'], correct:1 },
            { type:'match', question:'Match gender forms:', pairs:[{left:'चांगला',right:'Good (masc)'},{left:'चांगली',right:'Good (fem)'},{left:'माझा',right:'My (masc)'},{left:'माझे',right:'My (neuter)'}] },
            { type:'cultural', emoji:'📝', title:'Three Genders!', text:'Marathi has THREE genders — masculine, feminine, and neuter. Unlike Hindi (2 genders), Marathi assigns neuter to many objects: घर (house), पुस्तक (book), पाणी (water). Adjectives and possessives must agree!' }
        ]
    },
    {
        id: 4, title_mr: 'प्रश्न', title_en: 'Questions', desc: 'Asking questions', icon: '❓', xp: 30, words: 8,
        steps: [
            { type:'teach', character:'काय', romanized:'kaay', meaning:'What', example:'काय करतोस? (What are you doing?)', audio:'kaay' },
            { type:'teach', character:'कोण', romanized:'kon', meaning:'Who', example:'कोण आहे? (Who is it?)', audio:'kon' },
            { type:'teach', character:'कुठे', romanized:'kuthe', meaning:'Where', example:'कुठे जातोस? (Where are you going?)', audio:'kuthe' },
            { type:'teach', character:'केव्हा', romanized:'kevhaa', meaning:'When', example:'केव्हा येणार? (When will you come?)', audio:'kevhaa' },
            { type:'mcq', question:'What does "कुठे" mean?', prompt:'कुठे', options:['What','Who','Where','When'], correct:2 },
            { type:'teach', character:'कसे', romanized:'kase', meaning:'How', example:'कसे आहात? (How are you?)', audio:'kase' },
            { type:'teach', character:'किती', romanized:'kiti', meaning:'How much/many', example:'किती रुपये? (How many rupees?)', audio:'kiti' },
            { type:'teach', character:'का', romanized:'kaa', meaning:'Why', example:'का रडतोस? (Why are you crying?)', audio:'kaa' },
            { type:'mcq', question:'How to ask "How are you?"', prompt:'🤝', options:['काय आहात?','कसे आहात?','कुठे आहात?','का आहात?'], correct:1 },
            { type:'match', question:'Match question words:', pairs:[{left:'काय',right:'What'},{left:'कोण',right:'Who'},{left:'कुठे',right:'Where'},{left:'का',right:'Why'}] },
            { type:'cultural', emoji:'🙏', title:'कसे आहात?', text:'"कसे आहात?" (How are you?) is the most common Marathi greeting. The response is "मी ठीक आहे" (I am fine) or "मजेत!" (Having fun!). In rural Maharashtra, elders greet with "जय भवानी!" or "राम राम!"' }
        ]
    },
    {
        id: 5, title_mr: 'नकार', title_en: 'Negation', desc: 'Saying no', icon: '🚫', xp: 30, words: 6,
        steps: [
            { type:'teach', character:'नाही', romanized:'naahi', meaning:'No / Not', example:'मी जात नाही (I don\'t go)', audio:'naahi' },
            { type:'teach', character:'नको', romanized:'nako', meaning:'Don\'t want', example:'मला नको (I don\'t want it)', audio:'nako' },
            { type:'teach', character:'नाही आवडत', romanized:'nahi avadat', meaning:'Don\'t like', example:'मला कांदा नाही आवडत (I don\'t like onion)', audio:'naahi avadat' },
            { type:'mcq', question:'How to say "No"?', prompt:'🚫', options:['हो','नको','नाही','काय'], correct:2 },
            { type:'teach', character:'कधीच नाही', romanized:'kadhich naahi', meaning:'Never', example:'मी कधीच खोटे बोलत नाही (I never lie)', audio:'kadhich naahi' },
            { type:'teach', character:'कोणीच नाही', romanized:'konich naahi', meaning:'Nobody', example:'कोणीच नाही आले (Nobody came)', audio:'konich naahi' },
            { type:'mcq', question:'"मला नको" means?', prompt:'मला नको', options:['I want','I like','I don\'t want','I am not'], correct:2 },
            { type:'fill', question:'Complete:', sentence:'मी जात ___ (I don\'t go)', answer:'नाही', options:['हो','नको','नाही','काय'] },
            { type:'match', question:'Match negations:', pairs:[{left:'नाही',right:'No/Not'},{left:'नको',right:'Don\'t want'},{left:'कधीच नाही',right:'Never'},{left:'कोणीच नाही',right:'Nobody'}] },
            { type:'cultural', emoji:'🤚', title:'Polite Refusal', text:'In Marathi culture, saying "नको" (don\'t want) is softer than "नाही" (no). When offered food, saying "बास, पुरे" (enough) is more polite. Maharashtrians are known for hospitality — refusing food is almost impossible!' }
        ]
    },
    {
        id: 6, title_mr: 'संख्या २०-१००', title_en: 'Numbers 20-100', desc: 'Counting higher', icon: '🔢', xp: 30, words: 10,
        steps: [
            { type:'teach', character:'वीस', romanized:'vees', meaning:'Twenty (20)', example:'२० - वीस', audio:'vees' },
            { type:'teach', character:'तीस', romanized:'tees', meaning:'Thirty (30)', example:'३० - तीस', audio:'tees' },
            { type:'teach', character:'चाळीस', romanized:'chaalis', meaning:'Forty (40)', example:'४० - चाळीस', audio:'chaalis' },
            { type:'teach', character:'पन्नास', romanized:'pannaas', meaning:'Fifty (50)', example:'५० - पन्नास', audio:'pannaas' },
            { type:'mcq', question:'What is "30" in Marathi?', prompt:'30 = ?', options:['वीस','तीस','चाळीस','पन्नास'], correct:1 },
            { type:'teach', character:'साठ', romanized:'saath', meaning:'Sixty (60)', example:'६० - साठ', audio:'saath' },
            { type:'teach', character:'सत्तर', romanized:'sattar', meaning:'Seventy (70)', example:'७० - सत्तर', audio:'sattar' },
            { type:'teach', character:'ऐंशी', romanized:'ainshi', meaning:'Eighty (80)', example:'८० - ऐंशी', audio:'ainshi' },
            { type:'teach', character:'शंभर', romanized:'shambhar', meaning:'Hundred (100)', example:'१०० - शंभर', audio:'shambhar' },
            { type:'mcq', question:'What is "100" in Marathi?', prompt:'💯', options:['ऐंशी','सत्तर','शंभर','साठ'], correct:2 },
            { type:'match', question:'Match numbers:', pairs:[{left:'वीस',right:'20'},{left:'पन्नास',right:'50'},{left:'सत्तर',right:'70'},{left:'शंभर',right:'100'}] },
            { type:'cultural', emoji:'🔢', title:'Unique Number System', text:'Marathi numbers use a subtractive pattern: 19 = "एकोणीस" (1-less-than-20), 29 = "एकोणतीस" (1-less-than-30). This is unlike Hindi and makes Marathi math fascinating! "एक-ऊण-वीस" literally means "one minus twenty."' }
        ]
    },
    {
        id: 7, title_mr: 'वेळ', title_en: 'Telling Time', desc: 'Hours and minutes', icon: '🕐', xp: 30, words: 8,
        steps: [
            { type:'teach', character:'किती वाजले?', romanized:'kiti vaajle?', meaning:'What time is it?', example:'आता किती वाजले? (What time is it now?)', audio:'kiti vaajle' },
            { type:'teach', character:'एक वाजला', romanized:'ek vaajlaa', meaning:'It\'s 1 o\'clock', example:'१ वाजला (It\'s one)', audio:'ek vaajlaa' },
            { type:'teach', character:'साडेतीन', romanized:'saadeteen', meaning:'3:30 (half past 3)', example:'साडेतीन वाजले', audio:'saadeteen' },
            { type:'teach', character:'सकाळ', romanized:'sakaal', meaning:'Morning', example:'सकाळी ६ वाजता (At 6 in the morning)', audio:'sakaal' },
            { type:'mcq', question:'"किती वाजले?" means?', prompt:'🕐', options:['Good morning','What time?','Good night','How much?'], correct:1 },
            { type:'teach', character:'दुपार', romanized:'dupaar', meaning:'Afternoon', example:'दुपारी १ वाजता (At 1 in the afternoon)', audio:'dupaar' },
            { type:'teach', character:'संध्याकाळ', romanized:'sandhyaakaal', meaning:'Evening', example:'संध्याकाळी ६ वाजता', audio:'sandhyaakaal' },
            { type:'teach', character:'रात्र', romanized:'raatr', meaning:'Night', example:'रात्री ९ वाजता (At 9 at night)', audio:'raatr' },
            { type:'mcq', question:'What is "Morning"?', prompt:'🌅', options:['रात्र','दुपार','संध्याकाळ','सकाळ'], correct:3 },
            { type:'match', question:'Match time of day:', pairs:[{left:'सकाळ',right:'Morning'},{left:'दुपार',right:'Afternoon'},{left:'संध्याकाळ',right:'Evening'},{left:'रात्र',right:'Night'}] },
            { type:'cultural', emoji:'🕐', title:'Time in Daily Life', text:'Maharashtrians often use "साडे" (half past) and "पाऊण" (quarter to). "सव्वा" means quarter past. "चहा वेळ" (tea time) around 4 PM is sacred in Maharashtrian households — never miss it!' }
        ]
    },
    {
        id: 8, title_mr: 'क्रियाविशेषण', title_en: 'Adverbs', desc: 'How, when, where', icon: '💫', xp: 30, words: 8,
        steps: [
            { type:'teach', character:'आज', romanized:'aaj', meaning:'Today', example:'आज सोमवार आहे (Today is Monday)', audio:'aaj' },
            { type:'teach', character:'उद्या', romanized:'udyaa', meaning:'Tomorrow', example:'उद्या भेटू (Let\'s meet tomorrow)', audio:'udyaa' },
            { type:'teach', character:'काल', romanized:'kaal', meaning:'Yesterday', example:'काल पाऊस पडला (It rained yesterday)', audio:'kaal' },
            { type:'teach', character:'आता', romanized:'aataa', meaning:'Now', example:'आता चला (Let\'s go now)', audio:'aataa' },
            { type:'mcq', question:'What does "उद्या" mean?', prompt:'उद्या', options:['Today','Yesterday','Tomorrow','Now'], correct:2 },
            { type:'teach', character:'नेहमी', romanized:'nehmi', meaning:'Always', example:'मी नेहमी वेळेवर येतो (I always come on time)', audio:'nehmi' },
            { type:'teach', character:'लवकर', romanized:'lavkar', meaning:'Early / Soon', example:'लवकर ये (Come early)', audio:'lavkar' },
            { type:'teach', character:'हळूहळू', romanized:'haluhalu', meaning:'Slowly', example:'हळूहळू चाला (Walk slowly)', audio:'haluhalu' },
            { type:'mcq', question:'Which means "Always"?', prompt:'🔁', options:['आता','काल','लवकर','नेहमी'], correct:3 },
            { type:'match', question:'Match adverbs:', pairs:[{left:'आज',right:'Today'},{left:'उद्या',right:'Tomorrow'},{left:'आता',right:'Now'},{left:'नेहमी',right:'Always'}] },
            { type:'cultural', emoji:'⏰', title:'Marathi Time Culture', text:'"उद्या करू" (will do tomorrow) is a common Marathi phrase — reflecting the relaxed Maharashtrian attitude. But "लवकर" (hurry) dominates Mumbai local train culture where every second counts!' }
        ]
    },
    {
        id: 9, title_mr: 'पुनरावलोकन २', title_en: 'Level 2 Review', desc: 'Foundation assessment', icon: '🏆', xp: 50, words: 0,
        steps: [
            { type:'mcq', question:'What does "मी" mean?', prompt:'मी', options:['You','We','I','They'], correct:2 },
            { type:'mcq', question:'Which means "To eat"?', prompt:'🍽️', options:['जाणे','खाणे','पिणे','बोलणे'], correct:1 },
            { type:'mcq', question:'How to say "I am"?', prompt:'I am', options:['तू आहे','मी आहे','ते आहे','ती आहे'], correct:1 },
            { type:'match', question:'Match question words:', pairs:[{left:'काय',right:'What'},{left:'कोण',right:'Who'},{left:'कुठे',right:'Where'},{left:'केव्हा',right:'When'}] },
            { type:'mcq', question:'"नाही" means?', prompt:'नाही', options:['Yes','Maybe','No/Not','Always'], correct:2 },
            { type:'mcq', question:'What is 50 in Marathi?', prompt:'50', options:['चाळीस','पन्नास','साठ','सत्तर'], correct:1 },
            { type:'fill', question:'Complete:', sentence:'___ वाजले? (What time is it?)', answer:'किती', options:['काय','कोण','किती','कुठे'] },
            { type:'match', question:'Match time of day:', pairs:[{left:'सकाळ',right:'Morning'},{left:'दुपार',right:'Afternoon'},{left:'संध्याकाळ',right:'Evening'},{left:'रात्र',right:'Night'}] },
            { type:'mcq', question:'"उद्या" means?', prompt:'उद्या', options:['Today','Tomorrow','Now','Always'], correct:1 },
            { type:'cultural', emoji:'🏆', title:'Level 2 Complete! शाब्बास!', text:'Well done (शाब्बास)! You now know pronouns, verbs, simple sentences, gender, questions, negation, numbers, time, and adverbs. You can form basic Marathi sentences! Ready for real conversations in Level 3!' }
        ]
    },
];

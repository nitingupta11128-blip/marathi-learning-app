/* ===== LEVEL 3: DAILY CONVERSATION ===== */
const LESSONS_L3 = [
    {
        id: 0, title_mr: 'अभिवादन', title_en: 'Greetings', desc: 'Hello, goodbye, thanks', icon: '🙏', xp: 30, words: 8,
        steps: [
            { type:'teach', character:'नमस्कार', romanized:'namaskaar', meaning:'Hello / Greetings', example:'नमस्कार, कसे आहात?', audio:'namaskaar' },
            { type:'teach', character:'शुभ सकाळ', romanized:'shubh sakaal', meaning:'Good morning', example:'शुभ सकाळ! आज छान दिवस आहे', audio:'shubh sakaal' },
            { type:'teach', character:'धन्यवाद', romanized:'dhanyavaad', meaning:'Thank you', example:'खूप धन्यवाद! (Thank you very much!)', audio:'dhanyavaad' },
            { type:'teach', character:'कृपया', romanized:'krupayaa', meaning:'Please', example:'कृपया बसा (Please sit)', audio:'krupayaa' },
            { type:'mcq', question:'How to say "Thank you"?', prompt:'🙏', options:['नमस्कार','कृपया','धन्यवाद','माफ करा'], correct:2 },
            { type:'teach', character:'माफ करा', romanized:'maaf karaa', meaning:'Sorry / Excuse me', example:'माफ करा, मला उशीर झाला (Sorry, I am late)', audio:'maaf karaa' },
            { type:'teach', character:'पुन्हा भेटू', romanized:'punhaa bhetu', meaning:'See you again', example:'पुन्हा भेटू, चला! (See you, bye!)', audio:'punhaa bhetu' },
            { type:'teach', character:'शुभ रात्री', romanized:'shubh raatri', meaning:'Good night', example:'शुभ रात्री, गोड झोप!', audio:'shubh raatri' },
            { type:'mcq', question:'"माफ करा" means?', prompt:'माफ करा', options:['Thank you','Hello','Sorry','Goodbye'], correct:2 },
            { type:'match', question:'Match greetings:', pairs:[{left:'नमस्कार',right:'Hello'},{left:'धन्यवाद',right:'Thank you'},{left:'कृपया',right:'Please'},{left:'माफ करा',right:'Sorry'}] },
            { type:'cultural', emoji:'🙏', title:'Namaskar Culture', text:'"नमस्कार" with folded hands is the traditional Marathi greeting. Unlike a handshake, it maintains personal space and shows respect. You may also hear "जय शिवाजी!" or "जय महाराष्ट्र!" as patriotic greetings!' }
        ]
    },
    {
        id: 1, title_mr: 'ओळख', title_en: 'Introductions', desc: 'Introduce yourself', icon: '🤝', xp: 30, words: 8,
        steps: [
            { type:'teach', character:'माझे नाव ... आहे', romanized:'mazhe naav ... aahe', meaning:'My name is...', example:'माझे नाव प्रिया आहे', audio:'mazhe naav' },
            { type:'teach', character:'मी ... राहतो', romanized:'mi ... raahto', meaning:'I live in...', example:'मी पुण्यात राहतो (I live in Pune)', audio:'mi raahto' },
            { type:'teach', character:'तुमचे नाव काय?', romanized:'tumche naav kaay?', meaning:'What is your name?', example:'नमस्कार, तुमचे नाव काय?', audio:'tumche naav' },
            { type:'teach', character:'भेटून आनंद झाला', romanized:'bhetun aanand zhaalaa', meaning:'Nice to meet you', example:'भेटून खूप आनंद झाला!', audio:'bhetun aanand' },
            { type:'mcq', question:'How to ask "What is your name?"', prompt:'❓', options:['माझे नाव काय?','तुमचे नाव काय?','कोण आहे?','काय करता?'], correct:1 },
            { type:'teach', character:'मी ... काम करतो', romanized:'mi ... kaam karto', meaning:'I work as...', example:'मी शिक्षक आहे (I am a teacher)', audio:'mi kaam karto' },
            { type:'teach', character:'मला मराठी शिकायचे आहे', romanized:'mala maraathi shikaayche aahe', meaning:'I want to learn Marathi', example:'मला मराठी बोलायचे आहे!', audio:'mala maraathi' },
            { type:'mcq', question:'"भेटून आनंद झाला" means?', prompt:'🤝', options:['Goodbye','See you','Nice to meet you','How are you'], correct:2 },
            { type:'fill', question:'Complete:', sentence:'माझे ___ प्रिया आहे (My name is Priya)', answer:'नाव', options:['काम','घर','नाव','गाव'] },
            { type:'match', question:'Match introductions:', pairs:[{left:'माझे नाव',right:'My name'},{left:'मी राहतो',right:'I live'},{left:'तुमचे नाव',right:'Your name'},{left:'भेटून आनंद',right:'Nice to meet'}] },
            { type:'cultural', emoji:'🏘️', title:'Introduction Etiquette', text:'When meeting elders in Maharashtra, touch their feet (पाया पडणे) before introducing yourself. Always use "तुम्ही" (formal you). Sharing your native place (गाव) is important — Maharashtrians love knowing where you\'re from!' }
        ]
    },
    {
        id: 2, title_mr: 'बाजारात', title_en: 'At the Market', desc: 'Shopping conversations', icon: '🛒', xp: 35, words: 10,
        steps: [
            { type:'teach', character:'किती रुपये?', romanized:'kiti rupaye?', meaning:'How much? (rupees)', example:'हे किती रुपये आहे?', audio:'kiti rupaye' },
            { type:'teach', character:'मला हवे आहे', romanized:'mala have aahe', meaning:'I want / need', example:'मला एक किलो बटाटे हवे आहेत', audio:'mala have' },
            { type:'teach', character:'खूप महाग', romanized:'khoop mahaag', meaning:'Too expensive', example:'हे खूप महाग आहे!', audio:'khoop mahaag' },
            { type:'teach', character:'स्वस्त', romanized:'svast', meaning:'Cheap / Affordable', example:'हे स्वस्त आहे (This is cheap)', audio:'svast' },
            { type:'mcq', question:'"किती रुपये?" means?', prompt:'💰', options:['Where is it?','How much?','What is it?','Is it good?'], correct:1 },
            { type:'teach', character:'एक किलो', romanized:'ek kilo', meaning:'One kilogram', example:'एक किलो कांदे द्या (Give one kg onions)', audio:'ek kilo' },
            { type:'teach', character:'बिल द्या', romanized:'bill dyaa', meaning:'Give the bill', example:'बिल किती झाले? (What\'s the total?)', audio:'bill dyaa' },
            { type:'teach', character:'सूट द्या', romanized:'soot dyaa', meaning:'Give discount', example:'थोडी सूट द्या ना! (Give some discount!)', audio:'soot dyaa' },
            { type:'mcq', question:'How to say "Too expensive"?', prompt:'💸', options:['स्वस्त','खूप महाग','बिल द्या','किती रुपये'], correct:1 },
            { type:'match', question:'Match shopping words:', pairs:[{left:'महाग',right:'Expensive'},{left:'स्वस्त',right:'Cheap'},{left:'सूट',right:'Discount'},{left:'बिल',right:'Bill'}] },
            { type:'cultural', emoji:'🛒', title:'Bargaining in Maharashtra', text:'Bargaining (भाव करणे) is an art in Maharashtra! At street markets and mandis, always ask "थोडे कमी करा" (reduce a little). The famous Crawford Market in Mumbai and Mandai in Pune are iconic shopping spots.' }
        ]
    },
    {
        id: 3, title_mr: 'हॉटेलमध्ये', title_en: 'At Restaurant', desc: 'Ordering food', icon: '🍽️', xp: 35, words: 10,
        steps: [
            { type:'teach', character:'मेनू कार्ड द्या', romanized:'menu card dyaa', meaning:'Give the menu', example:'कृपया मेनू कार्ड द्या', audio:'menu card dyaa' },
            { type:'teach', character:'मला ... हवे', romanized:'mala ... have', meaning:'I want...', example:'मला मिसळ पाव हवे (I want misal pav)', audio:'mala have' },
            { type:'teach', character:'चविष्ट', romanized:'chavisht', meaning:'Delicious / Tasty', example:'जेवण खूप चविष्ट आहे!', audio:'chavisht' },
            { type:'teach', character:'तिखट', romanized:'tikhat', meaning:'Spicy', example:'हे खूप तिखट आहे! (This is very spicy!)', audio:'tikhat' },
            { type:'mcq', question:'"चविष्ट" means?', prompt:'😋', options:['Spicy','Sweet','Delicious','Sour'], correct:2 },
            { type:'teach', character:'गोड', romanized:'god', meaning:'Sweet', example:'श्रीखंड गोड आहे (Shrikhand is sweet)', audio:'god' },
            { type:'teach', character:'पाणी आणा', romanized:'paani aanaa', meaning:'Bring water', example:'कृपया थंड पाणी आणा', audio:'paani aanaa' },
            { type:'teach', character:'बिल आणा', romanized:'bill aanaa', meaning:'Bring the bill', example:'बिल आणा, कृपया', audio:'bill aanaa' },
            { type:'mcq', question:'How to say "Bring water"?', prompt:'💧', options:['पाणी हवे','पाणी आणा','पाणी प्या','पाणी खा'], correct:1 },
            { type:'match', question:'Match food words:', pairs:[{left:'चविष्ट',right:'Delicious'},{left:'तिखट',right:'Spicy'},{left:'गोड',right:'Sweet'},{left:'मेनू',right:'Menu'}] },
            { type:'cultural', emoji:'🍛', title:'Maharashtrian Restaurants', text:'In Maharashtra, restaurants are called "हॉटेल" (hotel) even if they\'re just eateries! The famous "उडीपी" restaurants serve South Indian food. For authentic Marathi food, look for "झुणका भाकर केंद्र" — government-run Maharashtrian food stalls!' }
        ]
    },
    {
        id: 4, title_mr: 'प्रवास', title_en: 'Travel', desc: 'Getting around', icon: '🚂', xp: 35, words: 10,
        steps: [
            { type:'teach', character:'स्टेशन कुठे आहे?', romanized:'station kuthe aahe?', meaning:'Where is the station?', example:'रेल्वे स्टेशन कुठे आहे?', audio:'station kuthe' },
            { type:'teach', character:'तिकीट', romanized:'tikit', meaning:'Ticket', example:'एक तिकीट द्या (Give one ticket)', audio:'tikit' },
            { type:'teach', character:'गाडी', romanized:'gaadi', meaning:'Vehicle / Train', example:'गाडी केव्हा येणार? (When will the train come?)', audio:'gaadi' },
            { type:'teach', character:'उजवीकडे', romanized:'ujvikade', meaning:'To the right', example:'उजवीकडे वळा (Turn right)', audio:'ujvikade' },
            { type:'mcq', question:'"तिकीट" means?', prompt:'🎫', options:['Station','Ticket','Train','Bus'], correct:1 },
            { type:'teach', character:'डावीकडे', romanized:'daavikade', meaning:'To the left', example:'डावीकडे वळा (Turn left)', audio:'daavikade' },
            { type:'teach', character:'सरळ जा', romanized:'saral jaa', meaning:'Go straight', example:'सरळ जा, मग उजवीकडे वळा', audio:'saral jaa' },
            { type:'teach', character:'किती लांब?', romanized:'kiti lamb?', meaning:'How far?', example:'स्टेशन किती लांब आहे?', audio:'kiti lamb' },
            { type:'mcq', question:'How to say "Turn left"?', prompt:'⬅️', options:['उजवीकडे वळा','सरळ जा','डावीकडे वळा','मागे जा'], correct:2 },
            { type:'match', question:'Match directions:', pairs:[{left:'उजवीकडे',right:'Right'},{left:'डावीकडे',right:'Left'},{left:'सरळ',right:'Straight'},{left:'मागे',right:'Behind'}] },
            { type:'cultural', emoji:'🚂', title:'Mumbai Local Trains', text:'Mumbai local trains (लोकल) carry 7.5 million passengers daily — the lifeline of the city! Key phrases: "पुढे चला" (move ahead), "उतरायचे आहे" (need to get down). The three lines are Western, Central, and Harbour!' }
        ]
    },
    {
        id: 5, title_mr: 'डॉक्टरांकडे', title_en: 'At the Doctor', desc: 'Health phrases', icon: '🏥', xp: 30, words: 8,
        steps: [
            { type:'teach', character:'मला बरे वाटत नाही', romanized:'mala bare vaatat naahi', meaning:'I don\'t feel well', example:'डॉक्टर, मला बरे वाटत नाही', audio:'mala bare' },
            { type:'teach', character:'ताप आहे', romanized:'taap aahe', meaning:'I have fever', example:'मला ताप आहे (I have fever)', audio:'taap aahe' },
            { type:'teach', character:'डोके दुखतंय', romanized:'doke dukhtay', meaning:'Head hurts', example:'माझे डोके खूप दुखतंय', audio:'doke dukhtay' },
            { type:'teach', character:'औषध', romanized:'aushadh', meaning:'Medicine', example:'औषध घ्या (Take medicine)', audio:'aushadh' },
            { type:'mcq', question:'"ताप आहे" means?', prompt:'🤒', options:['Headache','Fever','Cold','Cough'], correct:1 },
            { type:'teach', character:'खोकला', romanized:'khoklaa', meaning:'Cough', example:'मला खोकला आहे (I have a cough)', audio:'khoklaa' },
            { type:'teach', character:'सर्दी', romanized:'sardi', meaning:'Cold (illness)', example:'सर्दी झाली (Caught a cold)', audio:'sardi' },
            { type:'mcq', question:'What is "Medicine"?', prompt:'💊', options:['ताप','सर्दी','औषध','खोकला'], correct:2 },
            { type:'fill', question:'Complete:', sentence:'मला बरे ___ नाही (I don\'t feel well)', answer:'वाटत', options:['आहे','वाटत','दुखत','येत'] },
            { type:'match', question:'Match health words:', pairs:[{left:'ताप',right:'Fever'},{left:'खोकला',right:'Cough'},{left:'सर्दी',right:'Cold'},{left:'औषध',right:'Medicine'}] },
            { type:'cultural', emoji:'🌿', title:'Traditional Medicine', text:'Maharashtra has a rich tradition of home remedies (घरगुती उपचार). हळद-दूध (turmeric milk) for cold, आल्याचा चहा (ginger tea) for sore throat, and काढा (herbal decoction) are kitchen staples in every Maharashtrian home!' }
        ]
    },
    {
        id: 6, title_mr: 'हवामान', title_en: 'Weather', desc: 'Weather talk', icon: '🌤️', xp: 25, words: 8,
        steps: [
            { type:'teach', character:'ऊन', romanized:'oon', meaning:'Sunshine / Hot weather', example:'आज खूप ऊन आहे (It\'s very sunny today)', audio:'oon' },
            { type:'teach', character:'पाऊस', romanized:'paaus', meaning:'Rain', example:'पाऊस पडतोय! (It\'s raining!)', audio:'paaus' },
            { type:'teach', character:'थंडी', romanized:'thandi', meaning:'Cold weather', example:'खूप थंडी आहे (It\'s very cold)', audio:'thandi' },
            { type:'teach', character:'वारा', romanized:'vaaraa', meaning:'Wind', example:'वारा सुटलाय (The wind is blowing)', audio:'vaaraa' },
            { type:'mcq', question:'"पाऊस" means?', prompt:'🌧️', options:['Sun','Wind','Cold','Rain'], correct:3 },
            { type:'teach', character:'ढग', romanized:'dhag', meaning:'Cloud', example:'आकाशात ढग आहेत (Clouds in the sky)', audio:'dhag' },
            { type:'teach', character:'इंद्रधनुष्य', romanized:'indradhanushya', meaning:'Rainbow', example:'पावसानंतर इंद्रधनुष्य!', audio:'indradhanushya' },
            { type:'mcq', question:'What is "Wind"?', prompt:'💨', options:['ऊन','पाऊस','वारा','ढग'], correct:2 },
            { type:'match', question:'Match weather:', pairs:[{left:'ऊन',right:'Sunshine'},{left:'पाऊस',right:'Rain'},{left:'थंडी',right:'Cold'},{left:'वारा',right:'Wind'}] },
            { type:'cultural', emoji:'🌧️', title:'Mumbai Monsoon', text:'Maharashtra\'s monsoon (पावसाळा) from June-September transforms the landscape! Mumbai receives 2,400mm of rain. Iconic phrases: "छत्री घे!" (Take umbrella!), "पावसात भिजायला मजा येते" (Fun getting drenched in rain!)' }
        ]
    },
    {
        id: 7, title_mr: 'भावना', title_en: 'Emotions', desc: 'Express feelings', icon: '😊', xp: 30, words: 8,
        steps: [
            { type:'teach', character:'आनंद', romanized:'aanand', meaning:'Happiness / Joy', example:'मला खूप आनंद झाला! (I\'m so happy!)', audio:'aanand' },
            { type:'teach', character:'दुःख', romanized:'dukh', meaning:'Sadness / Sorrow', example:'मला दुःख झाले (I\'m sad)', audio:'dukh' },
            { type:'teach', character:'राग', romanized:'raag', meaning:'Anger', example:'मला राग आला (I got angry)', audio:'raag' },
            { type:'teach', character:'भीती', romanized:'bhiti', meaning:'Fear', example:'मला भीती वाटते (I\'m scared)', audio:'bhiti' },
            { type:'mcq', question:'"आनंद" means?', prompt:'😊', options:['Anger','Fear','Happiness','Sadness'], correct:2 },
            { type:'teach', character:'प्रेम', romanized:'prem', meaning:'Love', example:'मला तुझ्यावर प्रेम आहे (I love you)', audio:'prem' },
            { type:'teach', character:'आश्चर्य', romanized:'aashcharya', meaning:'Surprise', example:'काय आश्चर्य! (What a surprise!)', audio:'aashcharya' },
            { type:'mcq', question:'What is "Love"?', prompt:'❤️', options:['आनंद','प्रेम','भीती','राग'], correct:1 },
            { type:'match', question:'Match emotions:', pairs:[{left:'आनंद',right:'Happiness'},{left:'दुःख',right:'Sadness'},{left:'राग',right:'Anger'},{left:'प्रेम',right:'Love'}] },
            { type:'cultural', emoji:'🎭', title:'Expressing Emotions', text:'Marathi has beautiful expressions for emotions! "मन भरून आले" (heart overflowed — deeply moved), "जीवाला घोर" (anxiety for loved ones). The Marathi word "जिव्हाळा" (warmth/affection) has no exact English translation!' }
        ]
    },
    {
        id: 8, title_mr: 'फोनवर बोलणे', title_en: 'Phone Conversation', desc: 'Talking on phone', icon: '📱', xp: 30, words: 8,
        steps: [
            { type:'teach', character:'हॅलो', romanized:'hello', meaning:'Hello (on phone)', example:'हॅलो, कोण बोलतंय?', audio:'hello' },
            { type:'teach', character:'मी बोलतोय', romanized:'mi boltoy', meaning:'This is... speaking', example:'मी राहुल बोलतोय', audio:'mi boltoy' },
            { type:'teach', character:'थांबा', romanized:'thaambaa', meaning:'Wait / Hold on', example:'थांबा, मी त्यांना देतो (Hold on, I\'ll give them)', audio:'thaambaa' },
            { type:'teach', character:'नंतर फोन करतो', romanized:'nantar phone karto', meaning:'I\'ll call later', example:'मी नंतर फोन करतो', audio:'nantar phone' },
            { type:'mcq', question:'"थांबा" means?', prompt:'📞', options:['Goodbye','Wait','Hello','Sorry'], correct:1 },
            { type:'teach', character:'कॉल कट झाला', romanized:'call cut zhaalaa', meaning:'Call got disconnected', example:'कॉल कट झाला, पुन्हा करा', audio:'call cut' },
            { type:'teach', character:'मेसेज पाठवा', romanized:'message paathvaa', meaning:'Send a message', example:'मला मेसेज पाठवा', audio:'message paathvaa' },
            { type:'mcq', question:'How to say "I\'ll call later"?', prompt:'📱', options:['थांबा','नंतर फोन करतो','मी बोलतोय','कॉल करा'], correct:1 },
            { type:'match', question:'Match phone phrases:', pairs:[{left:'हॅलो',right:'Hello'},{left:'थांबा',right:'Wait'},{left:'नंतर फोन',right:'Call later'},{left:'मेसेज पाठवा',right:'Send message'}] },
            { type:'cultural', emoji:'📱', title:'Phone Culture', text:'Maharashtrians often answer the phone with "बोला!" (Speak!) — which is also the name of this app! Ending calls with "ठेवतो/ठेवते" (keeping/hanging up) is standard. WhatsApp messages in Marathi often use "😊🙏" extensively!' }
        ]
    },
    {
        id: 9, title_mr: 'पुनरावलोकन ३', title_en: 'Level 3 Review', desc: 'Conversation assessment', icon: '🏆', xp: 50, words: 0,
        steps: [
            { type:'mcq', question:'"धन्यवाद" means?', prompt:'🙏', options:['Hello','Sorry','Thank you','Please'], correct:2 },
            { type:'mcq', question:'How to ask "How much?"', prompt:'💰', options:['किती रुपये?','कुठे आहे?','काय हवे?','कोण आहे?'], correct:0 },
            { type:'fill', question:'Complete:', sentence:'माझे ___ प्रिया आहे', answer:'नाव', options:['घर','काम','नाव','गाव'] },
            { type:'match', question:'Match directions:', pairs:[{left:'उजवीकडे',right:'Right'},{left:'डावीकडे',right:'Left'},{left:'सरळ',right:'Straight'},{left:'मागे',right:'Behind'}] },
            { type:'mcq', question:'"पाऊस" means?', prompt:'🌧️', options:['Sun','Wind','Cloud','Rain'], correct:3 },
            { type:'mcq', question:'"आनंद" means?', prompt:'😊', options:['Anger','Sadness','Fear','Happiness'], correct:3 },
            { type:'mcq', question:'How to say "I don\'t feel well"?', prompt:'🤒', options:['मला ताप आहे','मला बरे वाटत नाही','मला भूक नाही','मला सर्दी आहे'], correct:1 },
            { type:'match', question:'Match food words:', pairs:[{left:'चविष्ट',right:'Delicious'},{left:'तिखट',right:'Spicy'},{left:'गोड',right:'Sweet'},{left:'महाग',right:'Expensive'}] },
            { type:'mcq', question:'"थांबा" means?', prompt:'✋', options:['Go','Wait','Come','Run'], correct:1 },
            { type:'cultural', emoji:'🏆', title:'Level 3 Complete! छान!', text:'Fantastic (छान)! You can now have real conversations in Marathi — greetings, introductions, shopping, ordering food, travel, health, weather, and phone calls! You\'re ready for Advanced Level 4!' }
        ]
    },
];

/* ===== LEVEL 4: ADVANCED ===== */
const LESSONS_L4 = [
    {
        id: 0, title_mr: 'वर्तमानकाळ', title_en: 'Present Tense', desc: 'What happens now', icon: '⏰', xp: 40, words: 8,
        steps: [
            { type:'teach', character:'मी जातो/जाते', romanized:'mi jaato/jaate', meaning:'I go (m/f)', example:'मी शाळेत जातो (I go to school)', audio:'mi jaato' },
            { type:'teach', character:'तो खातो', romanized:'to khaato', meaning:'He eats', example:'तो जेवण खातो (He eats food)', audio:'to khaato' },
            { type:'teach', character:'ती बोलते', romanized:'ti bolte', meaning:'She speaks', example:'ती मराठी बोलते (She speaks Marathi)', audio:'ti bolte' },
            { type:'teach', character:'ते करतात', romanized:'te kartaat', meaning:'They do', example:'ते काम करतात (They work)', audio:'te kartaat' },
            { type:'mcq', question:'"मी जाते" is said by?', prompt:'मी जाते', options:['A boy','A girl','Both','Neither'], correct:1 },
            { type:'teach', character:'आम्ही शिकतो', romanized:'aamhi shikto', meaning:'We learn', example:'आम्ही मराठी शिकतो (We learn Marathi)', audio:'aamhi shikto' },
            { type:'teach', character:'तुम्ही करता', romanized:'tumhi kartaa', meaning:'You do (formal)', example:'तुम्ही काय करता? (What do you do?)', audio:'tumhi kartaa' },
            { type:'mcq', question:'How to say "She speaks"?', prompt:'🗣️', options:['ती बोलतो','ती बोलते','ती बोलतात','ती बोलत'], correct:1 },
            { type:'fill', question:'Complete:', sentence:'तो जेवण ___ (He eats food)', answer:'खातो', options:['खाते','खातो','खातात','खा'] },
            { type:'match', question:'Match present tense:', pairs:[{left:'मी जातो',right:'I go (m)'},{left:'ती बोलते',right:'She speaks'},{left:'ते करतात',right:'They do'},{left:'तुम्ही करता',right:'You do'}] },
            { type:'cultural', emoji:'📝', title:'Gender in Verbs', text:'Marathi present tense changes by gender! Boys say "मी जातो" while girls say "मी जाते." This gender agreement extends through all tenses — making Marathi one of the most gender-aware languages in India!' }
        ]
    },
    {
        id: 1, title_mr: 'भूतकाळ', title_en: 'Past Tense', desc: 'What happened', icon: '⏪', xp: 40, words: 8,
        steps: [
            { type:'teach', character:'मी गेलो/गेले', romanized:'mi gelo/gele', meaning:'I went (m/f)', example:'मी शाळेत गेलो (I went to school)', audio:'mi gelo' },
            { type:'teach', character:'त्याने खाल्ले', romanized:'tyaane khaalle', meaning:'He ate', example:'त्याने जेवण खाल्ले (He ate food)', audio:'tyaane khaalle' },
            { type:'teach', character:'तिने केले', romanized:'tine kele', meaning:'She did', example:'तिने काम केले (She did work)', audio:'tine kele' },
            { type:'teach', character:'पाऊस पडला', romanized:'paaus padlaa', meaning:'It rained', example:'काल पाऊस पडला (It rained yesterday)', audio:'paaus padlaa' },
            { type:'mcq', question:'"मी गेलो" is past tense of?', prompt:'मी गेलो', options:['To eat','To go','To come','To speak'], correct:1 },
            { type:'teach', character:'आम्ही पाहिले', romanized:'aamhi paahile', meaning:'We saw', example:'आम्ही चित्रपट पाहिला (We watched a movie)', audio:'aamhi paahile' },
            { type:'teach', character:'त्यांनी सांगितले', romanized:'tyaanni saangitle', meaning:'They told', example:'त्यांनी गोष्ट सांगितली (They told a story)', audio:'tyaanni saangitle' },
            { type:'mcq', question:'"तिने केले" means?', prompt:'तिने केले', options:['She went','She ate','She did','She saw'], correct:2 },
            { type:'match', question:'Match past tense:', pairs:[{left:'गेलो',right:'Went'},{left:'खाल्ले',right:'Ate'},{left:'केले',right:'Did'},{left:'पाहिले',right:'Saw'}] },
            { type:'cultural', emoji:'📚', title:'Ergative Construction', text:'Marathi past tense uses "ergative" construction — the subject takes "-ने" suffix: "त्याने" (he+did), "तिने" (she+did). This is unique among Indian languages and makes Marathi grammar fascinating for linguists!' }
        ]
    },
    {
        id: 2, title_mr: 'भविष्यकाळ', title_en: 'Future Tense', desc: 'What will happen', icon: '⏩', xp: 40, words: 8,
        steps: [
            { type:'teach', character:'मी जाईन', romanized:'mi jaain', meaning:'I will go', example:'मी उद्या जाईन (I will go tomorrow)', audio:'mi jaain' },
            { type:'teach', character:'तो येईल', romanized:'to yeil', meaning:'He will come', example:'तो उद्या येईल (He will come tomorrow)', audio:'to yeil' },
            { type:'teach', character:'ती करेल', romanized:'ti karel', meaning:'She will do', example:'ती काम करेल (She will do work)', audio:'ti karel' },
            { type:'teach', character:'आम्ही शिकू', romanized:'aamhi shiku', meaning:'We will learn', example:'आम्ही मराठी शिकू (We will learn Marathi)', audio:'aamhi shiku' },
            { type:'mcq', question:'"मी जाईन" means?', prompt:'🔮', options:['I went','I go','I will go','I am going'], correct:2 },
            { type:'teach', character:'पाऊस येईल', romanized:'paaus yeil', meaning:'It will rain', example:'उद्या पाऊस येईल (It will rain tomorrow)', audio:'paaus yeil' },
            { type:'teach', character:'ते करतील', romanized:'te kartil', meaning:'They will do', example:'ते काम करतील (They will do work)', audio:'te kartil' },
            { type:'mcq', question:'Future of "ती करते" (she does)?', prompt:'ती___', options:['ती केले','ती करेल','ती करते','ती करत'], correct:1 },
            { type:'fill', question:'Complete:', sentence:'मी उद्या ___ (I will go tomorrow)', answer:'जाईन', options:['गेलो','जातो','जाईन','जा'] },
            { type:'match', question:'Match future tense:', pairs:[{left:'जाईन',right:'Will go'},{left:'येईल',right:'Will come'},{left:'करेल',right:'Will do'},{left:'शिकू',right:'Will learn'}] },
            { type:'cultural', emoji:'🔮', title:'Planning in Marathi', text:'"उद्या बघू" (will see tomorrow) is the quintessential Maharashtrian response! Future tense in Marathi conveys both certainty and possibility. "बघू या" (let\'s see) is used when uncertain — a very common conversational filler!' }
        ]
    },
    {
        id: 3, title_mr: 'संयुक्त वाक्ये', title_en: 'Complex Sentences', desc: 'Connecting ideas', icon: '🔗', xp: 40, words: 8,
        steps: [
            { type:'teach', character:'आणि', romanized:'aani', meaning:'And', example:'मी आणि माझा भाऊ (Me and my brother)', audio:'aani' },
            { type:'teach', character:'पण', romanized:'pan', meaning:'But', example:'मला जायचे आहे पण वेळ नाही (I want to go but no time)', audio:'pan' },
            { type:'teach', character:'कारण', romanized:'kaaran', meaning:'Because', example:'मी आलो नाही कारण पाऊस होता (I didn\'t come because it rained)', audio:'kaaran' },
            { type:'teach', character:'म्हणून', romanized:'mhanun', meaning:'Therefore', example:'पाऊस आला म्हणून मी घरी राहिलो (It rained so I stayed home)', audio:'mhanun' },
            { type:'mcq', question:'"कारण" means?', prompt:'🔗', options:['And','But','Because','Therefore'], correct:2 },
            { type:'teach', character:'जर ... तर', romanized:'jar ... tar', meaning:'If ... then', example:'जर पाऊस आला तर मी जाणार नाही (If it rains, I won\'t go)', audio:'jar tar' },
            { type:'teach', character:'जेव्हा ... तेव्हा', romanized:'jevhaa ... tevhaa', meaning:'When ... then', example:'जेव्हा मी आलो तेव्हा तो गेला (When I came, he left)', audio:'jevhaa tevhaa' },
            { type:'mcq', question:'"जर ... तर" means?', prompt:'🤔', options:['And...but','If...then','When...then','Either...or'], correct:1 },
            { type:'match', question:'Match connectors:', pairs:[{left:'आणि',right:'And'},{left:'पण',right:'But'},{left:'कारण',right:'Because'},{left:'म्हणून',right:'Therefore'}] },
            { type:'cultural', emoji:'📖', title:'Marathi Storytelling', text:'Marathi literature is rich with complex sentence structures. The famous "Vyakti ani Valli" by P.L. Deshpande showcases beautiful Marathi prose. Complex sentences using "जर-तर" and "जेव्हा-तेव्हा" are hallmarks of literary Marathi!' }
        ]
    },
    {
        id: 4, title_mr: 'म्हणी', title_en: 'Proverbs & Idioms', desc: 'Wisdom sayings', icon: '📜', xp: 35, words: 6,
        steps: [
            { type:'teach', character:'करावे तसे भरावे', romanized:'karaave tase bharaave', meaning:'As you sow, so shall you reap', example:'A lesson about consequences', audio:'karaave' },
            { type:'teach', character:'उतावळा नवरा गुडघ्याला बाशिंग', romanized:'utaavalaa navraa', meaning:'Haste makes waste', example:'An impatient groom ties the wedding knot at his knee!', audio:'utaavalaa' },
            { type:'teach', character:'डोंगर पोखरून उंदीर', romanized:'dongar pokharun undir', meaning:'Much ado about nothing', example:'Dug a mountain, found a mouse', audio:'dongar' },
            { type:'teach', character:'अति तिथे माती', romanized:'ati tithe maati', meaning:'Excess leads to ruin', example:'Too much of anything is bad', audio:'ati tithe' },
            { type:'mcq', question:'"अति तिथे माती" teaches?', prompt:'📜', options:['Work hard','Be patient','Avoid excess','Be kind'], correct:2 },
            { type:'teach', character:'बुडत्याला काडीचा आधार', romanized:'budatyaalaa kaadichaa aadhaar', meaning:'A drowning person clutches at straws', example:'Desperate times, desperate measures', audio:'budatyaalaa' },
            { type:'teach', character:'शितावरून भाताची परीक्षा', romanized:'shitaawarun bhaataachi', meaning:'Judge the whole by a sample', example:'Test the rice by a single grain', audio:'shitaawarun' },
            { type:'mcq', question:'Which proverb means "Haste makes waste"?', prompt:'🏃💨', options:['करावे तसे भरावे','अति तिथे माती','उतावळा नवरा...','डोंगर पोखरून...'], correct:2 },
            { type:'match', question:'Match proverbs:', pairs:[{left:'करावे तसे भरावे',right:'As you sow...'},{left:'अति तिथे माती',right:'Excess = ruin'},{left:'डोंगर पोखरून उंदीर',right:'Much ado...'},{left:'शितावरून...',right:'Judge by sample'}] },
            { type:'cultural', emoji:'📜', title:'Marathi म्हणी', text:'Marathi proverbs (म्हणी) are gems of folk wisdom passed down generations. They use vivid imagery from rural life — farming, cooking, and nature. Learning म्हणी is considered a mark of true Marathi fluency and cultural understanding!' }
        ]
    },
    {
        id: 5, title_mr: 'पत्र लेखन', title_en: 'Letter Writing', desc: 'Formal & informal letters', icon: '✉️', xp: 35, words: 8,
        steps: [
            { type:'teach', character:'प्रिय / पूज्य', romanized:'priya / poojya', meaning:'Dear / Respected', example:'पूज्य बाबा (Respected Father)', audio:'priya poojya' },
            { type:'teach', character:'सप्रेम नमस्कार', romanized:'saprem namaskaar', meaning:'Loving greetings', example:'Opening line in informal letters', audio:'saprem namaskaar' },
            { type:'teach', character:'आपला / आपली', romanized:'aaplaa / aapli', meaning:'Yours', example:'आपला विश्वासू (Yours faithfully)', audio:'aaplaa' },
            { type:'teach', character:'कळावे', romanized:'kalaave', meaning:'Please be informed', example:'आपणास कळावे की... (Please be informed that...)', audio:'kalaave' },
            { type:'mcq', question:'"पूज्य" is used for?', prompt:'✉️', options:['Friends','Children','Elders/Respected','Strangers'], correct:2 },
            { type:'teach', character:'विनंती', romanized:'vinanti', meaning:'Request', example:'माझी विनंती आहे की... (My request is that...)', audio:'vinanti' },
            { type:'teach', character:'धन्यवाद', romanized:'dhanyavaad', meaning:'Thank you (closing)', example:'सहकार्याबद्दल धन्यवाद (Thanks for cooperation)', audio:'dhanyavaad' },
            { type:'mcq', question:'"विनंती" means?', prompt:'🙏', options:['Order','Request','Question','Answer'], correct:1 },
            { type:'match', question:'Match letter phrases:', pairs:[{left:'प्रिय',right:'Dear'},{left:'पूज्य',right:'Respected'},{left:'विनंती',right:'Request'},{left:'आपला',right:'Yours'}] },
            { type:'cultural', emoji:'✉️', title:'Marathi Letters', text:'Traditional Marathi letters begin with "श्री गणेशाय नमः" or "॥ श्री ॥" at the top. Formal letters use "महोदय" (Sir) and end with "आपला विश्वासू" (yours faithfully). This format is still used in government correspondence in Maharashtra!' }
        ]
    },
    {
        id: 6, title_mr: 'वाचन', title_en: 'Reading Practice', desc: 'Read short passages', icon: '📖', xp: 40, words: 10,
        steps: [
            { type:'teach', character:'महाराष्ट्र हे भारतातील एक मोठे राज्य आहे.', romanized:'mahaaraashtra he bhaarataatil ek mothe raajya aahe.', meaning:'Maharashtra is a big state in India.', example:'Reading passage line 1', audio:'mahaaraashtra' },
            { type:'teach', character:'मुंबई ही महाराष्ट्राची राजधानी आहे.', romanized:'mumbai hi mahaaraashtraachi raajadhani aahe.', meaning:'Mumbai is the capital of Maharashtra.', example:'Reading passage line 2', audio:'mumbai' },
            { type:'teach', character:'येथे मराठी भाषा बोलली जाते.', romanized:'yethe maraathi bhaashaa bolali jaate.', meaning:'Marathi language is spoken here.', example:'Reading passage line 3', audio:'yethe maraathi' },
            { type:'mcq', question:'What is Mumbai according to the passage?', prompt:'🏙️', options:['A country','Capital of India','Capital of Maharashtra','A village'], correct:2 },
            { type:'teach', character:'महाराष्ट्रात अनेक किल्ले आहेत.', romanized:'mahaaraashtraat anek kille aahet.', meaning:'There are many forts in Maharashtra.', example:'Reading passage line 4', audio:'anek kille' },
            { type:'teach', character:'छत्रपती शिवाजी महाराज हे महान राजे होते.', romanized:'chhatrapati shivaaji...', meaning:'Chhatrapati Shivaji Maharaj was a great king.', example:'Reading passage line 5', audio:'chhatrapati' },
            { type:'mcq', question:'What does Maharashtra have many of?', prompt:'🏰', options:['Rivers','Mountains','Forts','Beaches'], correct:2 },
            { type:'fill', question:'Complete:', sentence:'मुंबई ही महाराष्ट्राची ___ आहे', answer:'राजधानी', options:['शाळा','राजधानी','भाषा','गाव'] },
            { type:'match', question:'Match from passage:', pairs:[{left:'महाराष्ट्र',right:'State'},{left:'मुंबई',right:'Capital'},{left:'मराठी',right:'Language'},{left:'किल्ले',right:'Forts'}] },
            { type:'cultural', emoji:'📖', title:'Reading in Marathi', text:'Reading Marathi texts builds fluency rapidly. Start with children\'s stories (बालकथा), then newspapers like "लोकसत्ता" and "सकाळ." The famous "छावा" by Shivaji Sawant is considered a masterpiece of Marathi historical fiction!' }
        ]
    },
    {
        id: 7, title_mr: 'संवाद सराव', title_en: 'Dialogue Practice', desc: 'Real conversations', icon: '💬', xp: 40, words: 8,
        steps: [
            { type:'teach', character:'A: नमस्कार!\nB: नमस्कार, कसे आहात?', romanized:'Namaskaar! Kase aahaat?', meaning:'Hello! How are you?', example:'Greeting dialogue', audio:'namaskaar kase' },
            { type:'teach', character:'A: मी ठीक आहे.\nB: काय करता तुम्ही?', romanized:'Mi theek aahe. Kaay kartaa?', meaning:'I\'m fine. What do you do?', example:'Asking about work', audio:'mi theek' },
            { type:'teach', character:'A: मी शिक्षक आहे.\nB: छान! कुठे राहता?', romanized:'Mi shikshak aahe. Kuthe raahtaa?', meaning:'I\'m a teacher. Where do you live?', example:'Sharing info', audio:'mi shikshak' },
            { type:'mcq', question:'What does person A do?', prompt:'👨‍🏫', options:['Doctor','Engineer','Teacher','Student'], correct:2 },
            { type:'teach', character:'A: मी पुण्यात राहतो.\nB: पुणे खूप छान शहर आहे!', romanized:'Mi punyaat raahto.', meaning:'I live in Pune. Pune is a great city!', example:'Talking about cities', audio:'mi punyaat' },
            { type:'teach', character:'A: तुम्हाला चहा हवा का?\nB: हो, कृपया!', romanized:'Tumhaala chahaa havaa kaa?', meaning:'Do you want tea? Yes, please!', example:'Offering something', audio:'chahaa havaa' },
            { type:'mcq', question:'What city does A live in?', prompt:'🏙️', options:['Mumbai','Nagpur','Pune','Nashik'], correct:2 },
            { type:'fill', question:'Complete the dialogue:', sentence:'तुम्हाला चहा ___ का? (Do you want tea?)', answer:'हवा', options:['आहे','नाही','हवा','करा'] },
            { type:'match', question:'Match dialogue phrases:', pairs:[{left:'कसे आहात',right:'How are you'},{left:'काय करता',right:'What do you do'},{left:'कुठे राहता',right:'Where do you live'},{left:'चहा हवा',right:'Want tea'}] },
            { type:'cultural', emoji:'☕', title:'चहा पे चर्चा', text:'"चहा पे चर्चा" (Discussion over tea) is a Maharashtrian tradition! Most conversations happen over steaming cups of cutting chai. The \"tapri\" (roadside tea stall) is where friendships are built and politics is debated!' }
        ]
    },
    {
        id: 8, title_mr: 'निबंध', title_en: 'Essay Writing', desc: 'Write in Marathi', icon: '✍️', xp: 40, words: 8,
        steps: [
            { type:'teach', character:'विषय: माझे गाव', romanized:'vishay: mazhe gaav', meaning:'Topic: My Village', example:'Essay topic introduction', audio:'mazhe gaav' },
            { type:'teach', character:'माझ्या गावाचे नाव ... आहे.', romanized:'maazhyaa gaavaache naav...', meaning:'My village\'s name is...', example:'Opening sentence pattern', audio:'gaavaache naav' },
            { type:'teach', character:'तेथे अनेक शेतकरी राहतात.', romanized:'tethe anek shetkari raahtaat.', meaning:'Many farmers live there.', example:'Body paragraph pattern', audio:'anek shetkari' },
            { type:'teach', character:'मला माझे गाव खूप आवडते.', romanized:'mala mazhe gaav khoop avadte.', meaning:'I love my village very much.', example:'Concluding sentence', audio:'mala mazhe gaav' },
            { type:'mcq', question:'What is the essay about?', prompt:'✍️', options:['My school','My family','My village','My city'], correct:2 },
            { type:'teach', character:'शेवटी / म्हणून', romanized:'shevati / mhanun', meaning:'Finally / Therefore', example:'शेवटी, माझे गाव सुंदर आहे (Finally, my village is beautiful)', audio:'shevati' },
            { type:'teach', character:'एकंदरीत', romanized:'ekandarit', meaning:'Overall / In conclusion', example:'एकंदरीत, गावातील जीवन शांत आहे', audio:'ekandarit' },
            { type:'mcq', question:'"एकंदरीत" means?', prompt:'📝', options:['Firstly','However','Overall','Because'], correct:2 },
            { type:'match', question:'Match essay words:', pairs:[{left:'विषय',right:'Topic'},{left:'शेवटी',right:'Finally'},{left:'एकंदरीत',right:'Overall'},{left:'म्हणून',right:'Therefore'}] },
            { type:'cultural', emoji:'✍️', title:'Marathi Essay Tradition', text:'Essay writing (निबंध लेखन) is an important part of Marathi education. Topics often include "माझा आवडता सण" (My favorite festival), "माझे आदर्श व्यक्तिमत्त्व" (My ideal personality). Marathi essays traditionally begin with a quote or proverb!' }
        ]
    },
    {
        id: 9, title_mr: 'अंतिम परीक्षा', title_en: 'Final Assessment', desc: 'Master Marathi!', icon: '🎓', xp: 75, words: 0,
        steps: [
            { type:'mcq', question:'Present tense: "She speaks" = ?', prompt:'🗣️', options:['ती बोलतो','ती बोलते','ती बोलतात','ती बोलला'], correct:1 },
            { type:'mcq', question:'Past tense of "जाणे" for "I" (male)?', prompt:'⏪', options:['मी जातो','मी जाईन','मी गेलो','मी जात'], correct:2 },
            { type:'mcq', question:'"मी जाईन" is which tense?', prompt:'⏰', options:['Present','Past','Future','Continuous'], correct:2 },
            { type:'match', question:'Match connectors:', pairs:[{left:'आणि',right:'And'},{left:'पण',right:'But'},{left:'कारण',right:'Because'},{left:'म्हणून',right:'Therefore'}] },
            { type:'mcq', question:'"अति तिथे माती" teaches?', prompt:'📜', options:['Be patient','Work hard','Avoid excess','Be brave'], correct:2 },
            { type:'fill', question:'Complete the letter opening:', sentence:'___ बाबा, सप्रेम नमस्कार', answer:'पूज्य', options:['प्रिय','पूज्य','छान','माझे'] },
            { type:'mcq', question:'Capital of Maharashtra?', prompt:'🏙️', options:['Pune','Nagpur','Mumbai','Nashik'], correct:2 },
            { type:'match', question:'Match all tenses:', pairs:[{left:'मी जातो',right:'I go (present)'},{left:'मी गेलो',right:'I went (past)'},{left:'मी जाईन',right:'I will go (future)'},{left:'मी जातोय',right:'I am going'}] },
            { type:'mcq', question:'"एकंदरीत" means?', prompt:'📝', options:['However','Overall','Because','Firstly'], correct:1 },
            { type:'mcq', question:'Which is Marathi for "If...then"?', prompt:'🤔', options:['आणि...पण','कारण...म्हणून','जर...तर','जेव्हा...तेव्हा'], correct:2 },
            { type:'cultural', emoji:'🎓', title:'अभिनंदन! Congratulations!', text:'You have completed ALL 4 levels of बोला! (Bola!)! From the alphabet to essay writing, you\'ve mastered Marathi grammar, vocabulary, and culture. You can now read, write, and converse in Marathi! जय महाराष्ट्र! 🏮🦚' }
        ]
    },
];

// Helper to get lessons array for a given level
function getLessonsForLevel(levelId) {
    const keys = [LESSONS, LESSONS_L2, LESSONS_L3, LESSONS_L4];
    return keys[levelId] || [];
}

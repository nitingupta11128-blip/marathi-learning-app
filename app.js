/* ========================================
   बोला! (Bola!) — Marathi Learning App
   Main Application Logic
   ======================================== */

// ===== APP STATE =====
const AppState = {
    currentScreen: 'splash',
    currentLesson: 0,
    currentStep: 0,
    xp: 0,
    streak: 1,
    hearts: 5,
    wordsLearned: 0,
    lessonsCompleted: 0,
    dailyXP: 0,
    dailyGoal: 20,
    currentFlashcardIndex: 0,
    selectedAnswer: null,
    lessonAnswers: { correct: 0, total: 0 },
    onboardingStep: 0,
    matchState: { selected: null, matched: [] },
    weeklyActivity: [15, 25, 10, 20, 0, 0, 0], // sample data
};

// ===== CURRICULUM DATA =====
const LESSONS = [
    {
        id: 0,
        title_mr: 'स्वर',
        title_en: 'Vowels',
        desc: 'Learn Marathi vowels',
        icon: '🔤',
        xp: 25,
        words: 12,
        steps: [
            {
                type: 'teach',
                character: 'अ',
                romanized: 'a',
                meaning: 'Like "u" in "but"',
                example: 'अनार (Pomegranate)',
                audio: 'a'
            },
            {
                type: 'teach',
                character: 'आ',
                romanized: 'aa',
                meaning: 'Like "a" in "father"',
                example: 'आई (Mother)',
                audio: 'aa'
            },
            {
                type: 'teach',
                character: 'इ',
                romanized: 'i',
                meaning: 'Like "i" in "sit"',
                example: 'इमारत (Building)',
                audio: 'i'
            },
            {
                type: 'teach',
                character: 'ई',
                romanized: 'ee',
                meaning: 'Like "ee" in "see"',
                example: 'ईख (Sugarcane)',
                audio: 'ee'
            },
            {
                type: 'mcq',
                question: 'Which vowel sounds like "a" in "father"?',
                prompt: '?',
                options: ['अ', 'आ', 'इ', 'ई'],
                correct: 1
            },
            {
                type: 'teach',
                character: 'उ',
                romanized: 'u',
                meaning: 'Like "u" in "put"',
                example: 'उंदीर (Mouse)',
                audio: 'u'
            },
            {
                type: 'teach',
                character: 'ए',
                romanized: 'e',
                meaning: 'Like "a" in "ate"',
                example: 'एक (One)',
                audio: 'e'
            },
            {
                type: 'mcq',
                question: 'What is the pronunciation of this vowel?',
                prompt: 'उ',
                options: ['aa', 'u', 'e', 'i'],
                correct: 1
            },
            {
                type: 'teach',
                character: 'ओ',
                romanized: 'o',
                meaning: 'Like "o" in "old"',
                example: 'ओळ (Line)',
                audio: 'o'
            },
            {
                type: 'mcq',
                question: 'Select the vowel "ओ":',
                prompt: 'o',
                options: ['अ', 'ए', 'ओ', 'उ'],
                correct: 2
            },
            {
                type: 'match',
                question: 'Match the vowels with their sounds:',
                pairs: [
                    { left: 'अ', right: 'a' },
                    { left: 'आ', right: 'aa' },
                    { left: 'इ', right: 'i' },
                    { left: 'ओ', right: 'o' }
                ]
            },
            {
                type: 'cultural',
                emoji: '📜',
                title: 'Devanagari Script',
                text: 'Marathi uses the Devanagari script, the same as Hindi. However, Marathi has additional characters like ळ (retroflex L). The Devanagari script is one of the oldest writing systems, dating back to the 1st century CE!'
            }
        ]
    },
    {
        id: 1,
        title_mr: 'व्यंजन भाग १',
        title_en: 'Consonants Part 1',
        desc: 'First set of consonants',
        icon: '✍️',
        xp: 25,
        words: 10,
        steps: [
            {
                type: 'teach',
                character: 'क',
                romanized: 'ka',
                meaning: 'Like "k" in "kite"',
                example: 'कमळ (Lotus)',
                audio: 'ka'
            },
            {
                type: 'teach',
                character: 'ख',
                romanized: 'kha',
                meaning: 'Like "kh" in "khan"',
                example: 'खुर्ची (Chair)',
                audio: 'kha'
            },
            {
                type: 'teach',
                character: 'ग',
                romanized: 'ga',
                meaning: 'Like "g" in "go"',
                example: 'गाय (Cow)',
                audio: 'ga'
            },
            {
                type: 'teach',
                character: 'घ',
                romanized: 'gha',
                meaning: 'Aspirated "g" sound',
                example: 'घर (House)',
                audio: 'gha'
            },
            {
                type: 'mcq',
                question: 'Which consonant makes the "ga" sound?',
                prompt: '"ga"',
                options: ['क', 'ख', 'ग', 'घ'],
                correct: 2
            },
            {
                type: 'teach',
                character: 'च',
                romanized: 'cha',
                meaning: 'Like "ch" in "church"',
                example: 'चहा (Tea)',
                audio: 'cha'
            },
            {
                type: 'teach',
                character: 'ज',
                romanized: 'ja',
                meaning: 'Like "j" in "jam"',
                example: 'जल (Water)',
                audio: 'ja'
            },
            {
                type: 'teach',
                character: 'झ',
                romanized: 'jha',
                meaning: 'Aspirated "j" sound',
                example: 'झाड (Tree)',
                audio: 'jha'
            },
            {
                type: 'mcq',
                question: 'What does "घर" mean?',
                prompt: 'घर',
                options: ['Cow', 'Chair', 'House', 'Tea'],
                correct: 2
            },
            {
                type: 'match',
                question: 'Match consonants with their meanings:',
                pairs: [
                    { left: 'गाय', right: 'Cow' },
                    { left: 'घर', right: 'House' },
                    { left: 'चहा', right: 'Tea' },
                    { left: 'झाड', right: 'Tree' }
                ]
            },
            {
                type: 'cultural',
                emoji: '🌸',
                title: 'Lotus - कमळ',
                text: 'The lotus (कमळ) holds deep significance in Indian culture. Maharashtra\'s many lakes and ponds are home to beautiful lotus flowers. The word "कमळ" starts with "क" — the very first consonant you learned today!'
            }
        ]
    },
    {
        id: 2,
        title_mr: 'व्यंजन भाग २',
        title_en: 'Consonants Part 2',
        desc: 'Retroflex & dental consonants',
        icon: '📝',
        xp: 25,
        words: 10,
        steps: [
            {
                type: 'teach',
                character: 'ट',
                romanized: 'ṭa',
                meaning: 'Retroflex "t" (tongue curled back)',
                example: 'टोपी (Cap)',
                audio: 'ta'
            },
            {
                type: 'teach',
                character: 'ड',
                romanized: 'ḍa',
                meaning: 'Retroflex "d" (tongue curled back)',
                example: 'डोंगर (Mountain)',
                audio: 'da'
            },
            {
                type: 'teach',
                character: 'त',
                romanized: 'ta',
                meaning: 'Dental "t" (tongue touches teeth)',
                example: 'तारा (Star)',
                audio: 'ta'
            },
            {
                type: 'teach',
                character: 'द',
                romanized: 'da',
                meaning: 'Dental "d" (tongue touches teeth)',
                example: 'दूध (Milk)',
                audio: 'da'
            },
            {
                type: 'mcq',
                question: 'Which word means "Mountain"?',
                prompt: '🏔️',
                options: ['टोपी', 'डोंगर', 'तारा', 'दूध'],
                correct: 1
            },
            {
                type: 'teach',
                character: 'न',
                romanized: 'na',
                meaning: 'Like "n" in "no"',
                example: 'नदी (River)',
                audio: 'na'
            },
            {
                type: 'teach',
                character: 'प',
                romanized: 'pa',
                meaning: 'Like "p" in "pen"',
                example: 'पाणी (Water)',
                audio: 'pa'
            },
            {
                type: 'mcq',
                question: 'What does "पाणी" mean?',
                prompt: 'पाणी',
                options: ['River', 'Star', 'Water', 'Milk'],
                correct: 2
            },
            {
                type: 'match',
                question: 'Match the words with meanings:',
                pairs: [
                    { left: 'तारा', right: 'Star' },
                    { left: 'दूध', right: 'Milk' },
                    { left: 'नदी', right: 'River' },
                    { left: 'पाणी', right: 'Water' }
                ]
            },
            {
                type: 'cultural',
                emoji: '🏔️',
                title: 'The Sahyadri Mountains',
                text: 'Maharashtra is home to the Sahyadri (Western Ghats) mountains — डोंगर! These ancient mountains house iconic forts like Raigad and Sinhagad, built by the great Chhatrapati Shivaji Maharaj.'
            }
        ]
    },
    {
        id: 3,
        title_mr: 'व्यंजन भाग ३',
        title_en: 'Consonants Part 3',
        desc: 'Unique Marathi sounds',
        icon: '🎯',
        xp: 25,
        words: 14,
        steps: [
            {
                type: 'teach',
                character: 'फ',
                romanized: 'pha',
                meaning: 'Like "ph" in "phone"',
                example: 'फूल (Flower)',
                audio: 'pha'
            },
            {
                type: 'teach',
                character: 'ब',
                romanized: 'ba',
                meaning: 'Like "b" in "ball"',
                example: 'बाग (Garden)',
                audio: 'ba'
            },
            {
                type: 'teach',
                character: 'म',
                romanized: 'ma',
                meaning: 'Like "m" in "man"',
                example: 'मासा (Fish)',
                audio: 'ma'
            },
            {
                type: 'teach',
                character: 'श',
                romanized: 'sha',
                meaning: 'Like "sh" in "she"',
                example: 'शाळा (School)',
                audio: 'sha'
            },
            {
                type: 'mcq',
                question: 'What does "फूल" mean?',
                prompt: 'फूल',
                options: ['Fish', 'Garden', 'Flower', 'School'],
                correct: 2
            },
            {
                type: 'teach',
                character: 'ळ',
                romanized: 'ḷa',
                meaning: 'Unique to Marathi! No English equivalent',
                example: 'माळ (Garland)',
                audio: 'la'
            },
            {
                type: 'teach',
                character: 'ह',
                romanized: 'ha',
                meaning: 'Like "h" in "hat"',
                example: 'हत्ती (Elephant)',
                audio: 'ha'
            },
            {
                type: 'mcq',
                question: 'Which letter is UNIQUE to Marathi?',
                prompt: '🤔',
                options: ['म', 'श', 'ळ', 'ह'],
                correct: 2
            },
            {
                type: 'match',
                question: 'Match words with meanings:',
                pairs: [
                    { left: 'फूल', right: 'Flower' },
                    { left: 'बाग', right: 'Garden' },
                    { left: 'शाळा', right: 'School' },
                    { left: 'हत्ती', right: 'Elephant' }
                ]
            },
            {
                type: 'cultural',
                emoji: '🎨',
                title: 'The Special ळ',
                text: 'The letter ळ makes Marathi unique! It doesn\'t exist in Hindi. Practice: माळ (garland), डाळ (dal), गोळा (ball), शाळा (school). This retroflex lateral sound is what gives Marathi its distinctive flavor!'
            }
        ]
    },
    {
        id: 4,
        title_mr: 'अंक',
        title_en: 'Numbers 1-20',
        desc: 'Learn to count in Marathi',
        icon: '🔢',
        xp: 30,
        words: 20,
        steps: [
            {
                type: 'teach',
                character: 'एक',
                romanized: 'ek',
                meaning: 'One (1)',
                example: '१ - एक (One)',
                audio: 'ek'
            },
            {
                type: 'teach',
                character: 'दोन',
                romanized: 'don',
                meaning: 'Two (2)',
                example: '२ - दोन (Two)',
                audio: 'don'
            },
            {
                type: 'teach',
                character: 'तीन',
                romanized: 'teen',
                meaning: 'Three (3)',
                example: '३ - तीन (Three)',
                audio: 'teen'
            },
            {
                type: 'teach',
                character: 'चार',
                romanized: 'chaar',
                meaning: 'Four (4)',
                example: '४ - चार (Four)',
                audio: 'chaar'
            },
            {
                type: 'teach',
                character: 'पाच',
                romanized: 'paach',
                meaning: 'Five (5)',
                example: '५ - पाच (Five)',
                audio: 'paach'
            },
            {
                type: 'mcq',
                question: 'What is "Five" in Marathi?',
                prompt: '5 = ?',
                options: ['तीन', 'चार', 'पाच', 'दोन'],
                correct: 2
            },
            {
                type: 'teach',
                character: 'सहा',
                romanized: 'sahaa',
                meaning: 'Six (6)',
                example: '६ - सहा (Six)',
                audio: 'sahaa'
            },
            {
                type: 'teach',
                character: 'सात',
                romanized: 'saat',
                meaning: 'Seven (7)',
                example: '७ - सात (Seven)',
                audio: 'saat'
            },
            {
                type: 'teach',
                character: 'आठ',
                romanized: 'aath',
                meaning: 'Eight (8)',
                example: '८ - आठ (Eight)',
                audio: 'aath'
            },
            {
                type: 'teach',
                character: 'नऊ',
                romanized: 'nau',
                meaning: 'Nine (9)',
                example: '९ - नऊ (Nine)',
                audio: 'nau'
            },
            {
                type: 'teach',
                character: 'दहा',
                romanized: 'dahaa',
                meaning: 'Ten (10)',
                example: '१० - दहा (Ten)',
                audio: 'dahaa'
            },
            {
                type: 'mcq',
                question: 'Which number is "आठ"?',
                prompt: 'आठ',
                options: ['6', '7', '8', '9'],
                correct: 2
            },
            {
                type: 'fill',
                question: 'Complete the sequence:',
                sentence: 'एक, दोन, ___, चार, पाच',
                answer: 'तीन',
                options: ['सहा', 'तीन', 'पाच', 'दोन']
            },
            {
                type: 'match',
                question: 'Match numbers with their Marathi names:',
                pairs: [
                    { left: 'एक', right: '1' },
                    { left: 'पाच', right: '5' },
                    { left: 'सात', right: '7' },
                    { left: 'दहा', right: '10' }
                ]
            },
            {
                type: 'cultural',
                emoji: '🔢',
                title: 'Marathi Number Patterns',
                text: 'Marathi numbers above 20 follow a unique subtractive pattern! 19 is "एकोणीस" (one-less-than-twenty), 29 is "एकोणतीस" (one-less-than-thirty). This is very different from Hindi and makes Marathi numbers fascinating!'
            }
        ]
    },
    {
        id: 5,
        title_mr: 'रंग',
        title_en: 'Colors',
        desc: 'Learn color names',
        icon: '🎨',
        xp: 25,
        words: 8,
        steps: [
            {
                type: 'teach',
                character: 'लाल',
                romanized: 'laal',
                meaning: 'Red',
                example: 'गुलाब लाल आहे (The rose is red)',
                audio: 'laal'
            },
            {
                type: 'teach',
                character: 'निळा',
                romanized: 'nilaa',
                meaning: 'Blue',
                example: 'आकाश निळे आहे (The sky is blue)',
                audio: 'nilaa'
            },
            {
                type: 'teach',
                character: 'पिवळा',
                romanized: 'pivlaa',
                meaning: 'Yellow',
                example: 'सूर्य पिवळा आहे (The sun is yellow)',
                audio: 'pivlaa'
            },
            {
                type: 'teach',
                character: 'हिरवा',
                romanized: 'hirvaa',
                meaning: 'Green',
                example: 'झाड हिरवे आहे (The tree is green)',
                audio: 'hirvaa'
            },
            {
                type: 'mcq',
                question: 'What color is "लाल"?',
                prompt: 'लाल',
                options: ['Blue', 'Green', 'Red', 'Yellow'],
                correct: 2
            },
            {
                type: 'teach',
                character: 'पांढरा',
                romanized: 'pandhraa',
                meaning: 'White',
                example: 'दूध पांढरे आहे (Milk is white)',
                audio: 'pandhraa'
            },
            {
                type: 'teach',
                character: 'काळा',
                romanized: 'kaalaa',
                meaning: 'Black',
                example: 'रात्र काळी आहे (Night is black)',
                audio: 'kaalaa'
            },
            {
                type: 'teach',
                character: 'केशरी',
                romanized: 'keshari',
                meaning: 'Orange (Saffron)',
                example: 'झेंडा केशरी आहे (The flag is saffron)',
                audio: 'keshari'
            },
            {
                type: 'teach',
                character: 'गुलाबी',
                romanized: 'gulaabi',
                meaning: 'Pink',
                example: 'फूल गुलाबी आहे (The flower is pink)',
                audio: 'gulaabi'
            },
            {
                type: 'mcq',
                question: 'Which word means "Green"?',
                prompt: '🟢',
                options: ['निळा', 'पिवळा', 'हिरवा', 'काळा'],
                correct: 2
            },
            {
                type: 'fill',
                question: 'Fill in the blank:',
                sentence: 'आकाश ___ आहे (Sky is blue)',
                answer: 'निळे',
                options: ['लाल', 'निळे', 'हिरवे', 'पिवळे']
            },
            {
                type: 'match',
                question: 'Match colors with their meanings:',
                pairs: [
                    { left: 'लाल', right: 'Red' },
                    { left: 'हिरवा', right: 'Green' },
                    { left: 'पांढरा', right: 'White' },
                    { left: 'काळा', right: 'Black' }
                ]
            },
            {
                type: 'cultural',
                emoji: '🏮',
                title: 'Colors of Maharashtra',
                text: 'Saffron (केशरी) holds deep significance in Marathi culture — it represents the Maratha flag of Chhatrapati Shivaji Maharaj. During festivals like Gudhi Padwa, you will see vibrant orange, red, and yellow decorations everywhere across Maharashtra!'
            }
        ]
    },
    {
        id: 6,
        title_mr: 'कुटुंब',
        title_en: 'Family',
        desc: 'Family members',
        icon: '👨‍👩‍👧‍👦',
        xp: 25,
        words: 10,
        steps: [
            {
                type: 'teach',
                character: 'आई',
                romanized: 'aai',
                meaning: 'Mother',
                example: 'माझी आई सुंदर आहे (My mother is beautiful)',
                audio: 'aai'
            },
            {
                type: 'teach',
                character: 'बाबा',
                romanized: 'baaba',
                meaning: 'Father',
                example: 'माझे बाबा काम करतात (My father works)',
                audio: 'baaba'
            },
            {
                type: 'teach',
                character: 'भाऊ',
                romanized: 'bhaau',
                meaning: 'Brother',
                example: 'माझा भाऊ लहान आहे (My brother is young)',
                audio: 'bhaau'
            },
            {
                type: 'teach',
                character: 'बहीण',
                romanized: 'baheen',
                meaning: 'Sister',
                example: 'माझी बहीण शाळेत जाते (My sister goes to school)',
                audio: 'baheen'
            },
            {
                type: 'mcq',
                question: 'What does "आई" mean?',
                prompt: 'आई',
                options: ['Father', 'Sister', 'Mother', 'Brother'],
                correct: 2
            },
            {
                type: 'teach',
                character: 'आजी',
                romanized: 'aaji',
                meaning: 'Grandmother',
                example: 'आजी गोष्ट सांगते (Grandmother tells stories)',
                audio: 'aaji'
            },
            {
                type: 'teach',
                character: 'आजोबा',
                romanized: 'aajoba',
                meaning: 'Grandfather',
                example: 'आजोबा बागेत जातात (Grandfather goes to the garden)',
                audio: 'aajoba'
            },
            {
                type: 'teach',
                character: 'काका',
                romanized: 'kaakaa',
                meaning: 'Uncle (Father\'s brother)',
                example: 'काका मुंबईत राहतात (Uncle lives in Mumbai)',
                audio: 'kaakaa'
            },
            {
                type: 'teach',
                character: 'काकू',
                romanized: 'kaakoo',
                meaning: 'Aunt (Uncle\'s wife)',
                example: 'काकू जेवण बनवतात (Aunt cooks food)',
                audio: 'kaakoo'
            },
            {
                type: 'mcq',
                question: 'Who is "आजोबा"?',
                prompt: 'आजोबा',
                options: ['Grandmother', 'Uncle', 'Grandfather', 'Father'],
                correct: 2
            },
            {
                type: 'match',
                question: 'Match family members:',
                pairs: [
                    { left: 'आई', right: 'Mother' },
                    { left: 'बाबा', right: 'Father' },
                    { left: 'भाऊ', right: 'Brother' },
                    { left: 'आजी', right: 'Grandmother' }
                ]
            },
            {
                type: 'cultural',
                emoji: '👨‍👩‍👧‍👦',
                title: 'Joint Family System',
                text: 'Maharashtra has a strong tradition of joint families (एकत्र कुटुंब). Multiple generations live together, sharing meals and responsibilities. The saying "वसुधैव कुटुंबकम" (The world is one family) reflects this deep cultural value of togetherness.'
            }
        ]
    },
    {
        id: 7,
        title_mr: 'शरीर',
        title_en: 'Body Parts',
        desc: 'Parts of the body',
        icon: '🫀',
        xp: 25,
        words: 10,
        steps: [
            {
                type: 'teach',
                character: 'डोके',
                romanized: 'doke',
                meaning: 'Head',
                example: 'डोके दुखतंय (My head hurts)',
                audio: 'doke'
            },
            {
                type: 'teach',
                character: 'डोळे',
                romanized: 'dole',
                meaning: 'Eyes',
                example: 'तिचे डोळे सुंदर आहेत (Her eyes are beautiful)',
                audio: 'dole'
            },
            {
                type: 'teach',
                character: 'नाक',
                romanized: 'naak',
                meaning: 'Nose',
                example: 'नाक लाल आहे (Nose is red)',
                audio: 'naak'
            },
            {
                type: 'teach',
                character: 'कान',
                romanized: 'kaan',
                meaning: 'Ear',
                example: 'कानाने ऐका (Listen with ears)',
                audio: 'kaan'
            },
            {
                type: 'mcq',
                question: 'What does "डोळे" mean?',
                prompt: 'डोळे',
                options: ['Head', 'Nose', 'Eyes', 'Ear'],
                correct: 2
            },
            {
                type: 'teach',
                character: 'हात',
                romanized: 'haat',
                meaning: 'Hand',
                example: 'हात धुवा (Wash your hands)',
                audio: 'haat'
            },
            {
                type: 'teach',
                character: 'पाय',
                romanized: 'paay',
                meaning: 'Leg / Foot',
                example: 'पाय दुखतोय (My leg hurts)',
                audio: 'paay'
            },
            {
                type: 'teach',
                character: 'तोंड',
                romanized: 'tond',
                meaning: 'Mouth / Face',
                example: 'तोंड उघडा (Open your mouth)',
                audio: 'tond'
            },
            {
                type: 'teach',
                character: 'पोट',
                romanized: 'pot',
                meaning: 'Stomach',
                example: 'पोट भरले (Stomach is full)',
                audio: 'pot'
            },
            {
                type: 'mcq',
                question: 'Which word means "Hand"?',
                prompt: '✋',
                options: ['पाय', 'हात', 'डोके', 'पोट'],
                correct: 1
            },
            {
                type: 'match',
                question: 'Match body parts:',
                pairs: [
                    { left: 'डोके', right: 'Head' },
                    { left: 'हात', right: 'Hand' },
                    { left: 'पाय', right: 'Leg' },
                    { left: 'तोंड', right: 'Mouth' }
                ]
            },
            {
                type: 'cultural',
                emoji: '🙏',
                title: 'Touching Feet — पाया पडणे',
                text: 'In Marathi culture, touching the feet (पाया पडणे) of elders is a deep sign of respect. When greeting grandparents, teachers, or elders, younger people bend down and touch their feet. Elders respond with blessings. This beautiful tradition is alive across Maharashtra!'
            }
        ]
    },
    {
        id: 8,
        title_mr: 'फळे',
        title_en: 'Fruits',
        desc: 'Common fruit names',
        icon: '🥭',
        xp: 25,
        words: 8,
        steps: [
            {
                type: 'teach',
                character: 'आंबा',
                romanized: 'aambaa',
                meaning: 'Mango',
                example: 'आंबा गोड आहे (Mango is sweet)',
                audio: 'aambaa'
            },
            {
                type: 'teach',
                character: 'केळे',
                romanized: 'kele',
                meaning: 'Banana',
                example: 'केळे पिवळे आहे (Banana is yellow)',
                audio: 'kele'
            },
            {
                type: 'teach',
                character: 'सफरचंद',
                romanized: 'safarchand',
                meaning: 'Apple',
                example: 'सफरचंद लाल आहे (Apple is red)',
                audio: 'safarchand'
            },
            {
                type: 'teach',
                character: 'द्राक्षे',
                romanized: 'draakshe',
                meaning: 'Grapes',
                example: 'द्राक्षे आंबट आहेत (Grapes are sour)',
                audio: 'draakshe'
            },
            {
                type: 'mcq',
                question: 'What fruit is "आंबा"?',
                prompt: 'आंबा',
                options: ['Apple', 'Banana', 'Mango', 'Grapes'],
                correct: 2
            },
            {
                type: 'teach',
                character: 'संत्रे',
                romanized: 'santre',
                meaning: 'Orange',
                example: 'संत्र्याचा रस पिवळा आहे (Orange juice is yellow)',
                audio: 'santre'
            },
            {
                type: 'teach',
                character: 'डाळिंब',
                romanized: 'daalimb',
                meaning: 'Pomegranate',
                example: 'डाळिंब लाल आहे (Pomegranate is red)',
                audio: 'daalimb'
            },
            {
                type: 'teach',
                character: 'टरबूज',
                romanized: 'tarbooj',
                meaning: 'Watermelon',
                example: 'टरबूज मोठे आहे (Watermelon is big)',
                audio: 'tarbooj'
            },
            {
                type: 'mcq',
                question: 'Which word means "Banana"?',
                prompt: '🍌',
                options: ['आंबा', 'केळे', 'संत्रे', 'सफरचंद'],
                correct: 1
            },
            {
                type: 'fill',
                question: 'Fill in the blank:',
                sentence: '___ गोड आहे (Mango is sweet)',
                answer: 'आंबा',
                options: ['केळे', 'आंबा', 'संत्रे', 'द्राक्षे']
            },
            {
                type: 'match',
                question: 'Match fruits with meanings:',
                pairs: [
                    { left: 'आंबा', right: 'Mango' },
                    { left: 'केळे', right: 'Banana' },
                    { left: 'संत्रे', right: 'Orange' },
                    { left: 'द्राक्षे', right: 'Grapes' }
                ]
            },
            {
                type: 'cultural',
                emoji: '🥭',
                title: 'Hapus Aamba — The King of Mangoes',
                text: 'The Alphonso mango (हापूस आंबा) from Ratnagiri and Devgad in Maharashtra is considered the finest mango in the world! Called the "King of Mangoes," it is sweet, fragrant, and eagerly awaited every summer. आंबा is practically a festival season in Maharashtra!'
            }
        ]
    },
    {
        id: 9,
        title_mr: 'भाज्या',
        title_en: 'Vegetables',
        desc: 'Common vegetables',
        icon: '🥔',
        xp: 25,
        words: 8,
        steps: [
            {
                type: 'teach',
                character: 'बटाटा',
                romanized: 'bataataa',
                meaning: 'Potato',
                example: 'बटाट्याची भाजी (Potato curry)',
                audio: 'bataataa'
            },
            {
                type: 'teach',
                character: 'कांदा',
                romanized: 'kaandaa',
                meaning: 'Onion',
                example: 'कांदा तिखट आहे (Onion is pungent)',
                audio: 'kaandaa'
            },
            {
                type: 'teach',
                character: 'टोमॅटो',
                romanized: 'tomato',
                meaning: 'Tomato',
                example: 'टोमॅटो लाल आहे (Tomato is red)',
                audio: 'tomato'
            },
            {
                type: 'teach',
                character: 'मिरची',
                romanized: 'mirchi',
                meaning: 'Chili',
                example: 'मिरची तिखट आहे (Chili is spicy)',
                audio: 'mirchi'
            },
            {
                type: 'mcq',
                question: 'What vegetable is "बटाटा"?',
                prompt: 'बटाटा',
                options: ['Onion', 'Tomato', 'Potato', 'Chili'],
                correct: 2
            },
            {
                type: 'teach',
                character: 'वांगे',
                romanized: 'vaange',
                meaning: 'Eggplant / Brinjal',
                example: 'वांग्याचे भरीत (Roasted eggplant dish)',
                audio: 'vaange'
            },
            {
                type: 'teach',
                character: 'भेंडी',
                romanized: 'bhendi',
                meaning: 'Okra / Ladyfinger',
                example: 'भेंडीची भाजी (Okra curry)',
                audio: 'bhendi'
            },
            {
                type: 'teach',
                character: 'गाजर',
                romanized: 'gaajar',
                meaning: 'Carrot',
                example: 'गाजर केशरी आहे (Carrot is orange)',
                audio: 'gaajar'
            },
            {
                type: 'mcq',
                question: 'Which word means "Onion"?',
                prompt: '🧅',
                options: ['बटाटा', 'कांदा', 'मिरची', 'गाजर'],
                correct: 1
            },
            {
                type: 'match',
                question: 'Match vegetables:',
                pairs: [
                    { left: 'बटाटा', right: 'Potato' },
                    { left: 'कांदा', right: 'Onion' },
                    { left: 'मिरची', right: 'Chili' },
                    { left: 'वांगे', right: 'Eggplant' }
                ]
            },
            {
                type: 'cultural',
                emoji: '🍛',
                title: 'भरीत — Bharit',
                text: 'Vangyache Bharit (वांग्याचे भरीत) is a beloved Maharashtrian dish made by roasting eggplant (वांगे) over an open flame, then mashing it with onions, garlic, and spices. Paired with भाकरी (jowar flatbread), it is a staple rural Maharashtrian meal!'
            }
        ]
    },
    {
        id: 10,
        title_mr: 'प्राणी',
        title_en: 'Animals',
        desc: 'Animal names',
        icon: '🐘',
        xp: 25,
        words: 10,
        steps: [
            {
                type: 'teach',
                character: 'कुत्रा',
                romanized: 'kutraa',
                meaning: 'Dog',
                example: 'कुत्रा भुंकतो (The dog barks)',
                audio: 'kutraa'
            },
            {
                type: 'teach',
                character: 'मांजर',
                romanized: 'maanjar',
                meaning: 'Cat',
                example: 'मांजर दूध पिते (The cat drinks milk)',
                audio: 'maanjar'
            },
            {
                type: 'teach',
                character: 'गाय',
                romanized: 'gaay',
                meaning: 'Cow',
                example: 'गाय दूध देते (The cow gives milk)',
                audio: 'gaay'
            },
            {
                type: 'teach',
                character: 'घोडा',
                romanized: 'ghodaa',
                meaning: 'Horse',
                example: 'घोडा पळतो (The horse runs)',
                audio: 'ghodaa'
            },
            {
                type: 'mcq',
                question: 'What animal is "मांजर"?',
                prompt: 'मांजर',
                options: ['Dog', 'Horse', 'Cat', 'Cow'],
                correct: 2
            },
            {
                type: 'teach',
                character: 'हत्ती',
                romanized: 'hatti',
                meaning: 'Elephant',
                example: 'हत्ती मोठा आहे (The elephant is big)',
                audio: 'hatti'
            },
            {
                type: 'teach',
                character: 'पक्षी',
                romanized: 'pakshi',
                meaning: 'Bird',
                example: 'पक्षी उडतो (The bird flies)',
                audio: 'pakshi'
            },
            {
                type: 'teach',
                character: 'मासा',
                romanized: 'maasaa',
                meaning: 'Fish',
                example: 'मासा पाण्यात राहतो (The fish lives in water)',
                audio: 'maasaa'
            },
            {
                type: 'teach',
                character: 'साप',
                romanized: 'saap',
                meaning: 'Snake',
                example: 'साप सरपटतो (The snake slithers)',
                audio: 'saap'
            },
            {
                type: 'mcq',
                question: 'Which word means "Bird"?',
                prompt: '🐦',
                options: ['मासा', 'साप', 'पक्षी', 'हत्ती'],
                correct: 2
            },
            {
                type: 'match',
                question: 'Match animals with meanings:',
                pairs: [
                    { left: 'कुत्रा', right: 'Dog' },
                    { left: 'गाय', right: 'Cow' },
                    { left: 'हत्ती', right: 'Elephant' },
                    { left: 'पक्षी', right: 'Bird' }
                ]
            },
            {
                type: 'cultural',
                emoji: '🐯',
                title: 'Maharashtra Wildlife',
                text: 'Maharashtra is home to incredible wildlife! The Tadoba-Andhari Tiger Reserve houses Royal Bengal Tigers (वाघ). The Indian Giant Squirrel (शेकरू), Maharashtra\'s state animal, is found in the Western Ghats. The word "वाघ" (tiger) also symbolizes bravery in Marathi culture!'
            }
        ]
    },
    {
        id: 11,
        title_mr: 'वस्तू',
        title_en: 'Everyday Objects',
        desc: 'Common objects',
        icon: '📦',
        xp: 25,
        words: 10,
        steps: [
            {
                type: 'teach',
                character: 'पुस्तक',
                romanized: 'pustak',
                meaning: 'Book',
                example: 'पुस्तक वाचा (Read the book)',
                audio: 'pustak'
            },
            {
                type: 'teach',
                character: 'पेन',
                romanized: 'pen',
                meaning: 'Pen',
                example: 'पेन द्या (Give me a pen)',
                audio: 'pen'
            },
            {
                type: 'teach',
                character: 'टेबल',
                romanized: 'table',
                meaning: 'Table',
                example: 'टेबलवर ठेवा (Keep it on the table)',
                audio: 'table'
            },
            {
                type: 'teach',
                character: 'खुर्ची',
                romanized: 'khurchi',
                meaning: 'Chair',
                example: 'खुर्चीवर बसा (Sit on the chair)',
                audio: 'khurchi'
            },
            {
                type: 'mcq',
                question: 'What does "पुस्तक" mean?',
                prompt: 'पुस्तक',
                options: ['Pen', 'Table', 'Book', 'Chair'],
                correct: 2
            },
            {
                type: 'teach',
                character: 'फोन',
                romanized: 'phone',
                meaning: 'Phone',
                example: 'फोन वाजतोय (Phone is ringing)',
                audio: 'phone'
            },
            {
                type: 'teach',
                character: 'घड्याळ',
                romanized: 'ghadyaal',
                meaning: 'Clock / Watch',
                example: 'घड्याळ किती वाजले? (What time is it?)',
                audio: 'ghadyaal'
            },
            {
                type: 'teach',
                character: 'चावी',
                romanized: 'chaavi',
                meaning: 'Key',
                example: 'चावी कुठे आहे? (Where is the key?)',
                audio: 'chaavi'
            },
            {
                type: 'teach',
                character: 'पैसे',
                romanized: 'paise',
                meaning: 'Money',
                example: 'पैसे किती? (How much money?)',
                audio: 'paise'
            },
            {
                type: 'mcq',
                question: 'Which word means "Clock"?',
                prompt: '🕐',
                options: ['चावी', 'घड्याळ', 'फोन', 'पैसे'],
                correct: 1
            },
            {
                type: 'match',
                question: 'Match objects with meanings:',
                pairs: [
                    { left: 'पुस्तक', right: 'Book' },
                    { left: 'खुर्ची', right: 'Chair' },
                    { left: 'चावी', right: 'Key' },
                    { left: 'पैसे', right: 'Money' }
                ]
            },
            {
                type: 'cultural',
                emoji: '📖',
                title: 'Marathi Literature',
                text: 'Marathi has a rich literary tradition! पुस्तक (book) culture thrives in Maharashtra. The Marathi literary meet "अखिल भारतीय मराठी साहित्य संमेलन" is held annually since 1878 — one of the oldest literary gatherings in Asia. Famous authors include P.L. Deshpande and V.S. Khandekar, a Jnanpith awardee.'
            }
        ]
    },
    {
        id: 12,
        title_mr: 'दिवस & महिने',
        title_en: 'Days & Months',
        desc: 'Calendar vocabulary',
        icon: '📅',
        xp: 25,
        words: 14,
        steps: [
            {
                type: 'teach',
                character: 'सोमवार',
                romanized: 'somvaar',
                meaning: 'Monday',
                example: 'आज सोमवार आहे (Today is Monday)',
                audio: 'somvaar'
            },
            {
                type: 'teach',
                character: 'मंगळवार',
                romanized: 'mangalvaar',
                meaning: 'Tuesday',
                example: 'मंगळवारी बाजार असतो (Market is on Tuesday)',
                audio: 'mangalvaar'
            },
            {
                type: 'teach',
                character: 'बुधवार',
                romanized: 'budhvaar',
                meaning: 'Wednesday',
                example: 'बुधवार आठवड्याचा मध्य (Wednesday is mid-week)',
                audio: 'budhvaar'
            },
            {
                type: 'teach',
                character: 'गुरुवार',
                romanized: 'guruvaar',
                meaning: 'Thursday',
                example: 'गुरुवारी वर्ग आहे (Class is on Thursday)',
                audio: 'guruvaar'
            },
            {
                type: 'mcq',
                question: 'What day is "सोमवार"?',
                prompt: 'सोमवार',
                options: ['Sunday', 'Tuesday', 'Monday', 'Friday'],
                correct: 2
            },
            {
                type: 'teach',
                character: 'शुक्रवार',
                romanized: 'shukrvaar',
                meaning: 'Friday',
                example: 'शुक्रवारी सुट्टी (Holiday on Friday)',
                audio: 'shukrvaar'
            },
            {
                type: 'teach',
                character: 'शनिवार',
                romanized: 'shanivaar',
                meaning: 'Saturday',
                example: 'शनिवारी विश्रांती (Rest on Saturday)',
                audio: 'shanivaar'
            },
            {
                type: 'teach',
                character: 'रविवार',
                romanized: 'ravivaar',
                meaning: 'Sunday',
                example: 'रविवारी सुट्टी आहे (Sunday is a holiday)',
                audio: 'ravivaar'
            },
            {
                type: 'fill',
                question: 'Complete the sequence:',
                sentence: 'सोमवार, मंगळवार, ___, गुरुवार',
                answer: 'बुधवार',
                options: ['शुक्रवार', 'बुधवार', 'रविवार', 'शनिवार']
            },
            {
                type: 'mcq',
                question: 'Which day is "रविवार"?',
                prompt: 'रविवार',
                options: ['Saturday', 'Monday', 'Friday', 'Sunday'],
                correct: 3
            },
            {
                type: 'match',
                question: 'Match days with meanings:',
                pairs: [
                    { left: 'सोमवार', right: 'Monday' },
                    { left: 'शुक्रवार', right: 'Friday' },
                    { left: 'शनिवार', right: 'Saturday' },
                    { left: 'रविवार', right: 'Sunday' }
                ]
            },
            {
                type: 'cultural',
                emoji: '📅',
                title: 'Marathi Calendar — शके',
                text: 'Maharashtra follows the Shalivahan Shaka (शालिवाहन शके) calendar alongside the Gregorian one. Marathi months have beautiful names: चैत्र, वैशाख, ज्येष्ठ... The month names come from lunar nakshatras. Many Maharashtrian festivals are dated according to this calendar!'
            }
        ]
    },
    {
        id: 13,
        title_mr: 'विशेषणे',
        title_en: 'Adjectives',
        desc: 'Common adjectives',
        icon: '💬',
        xp: 25,
        words: 10,
        steps: [
            {
                type: 'teach',
                character: 'मोठा',
                romanized: 'mothaa',
                meaning: 'Big / Large',
                example: 'हत्ती मोठा आहे (The elephant is big)',
                audio: 'mothaa'
            },
            {
                type: 'teach',
                character: 'लहान',
                romanized: 'lahaan',
                meaning: 'Small / Little',
                example: 'मुंगी लहान आहे (The ant is small)',
                audio: 'lahaan'
            },
            {
                type: 'teach',
                character: 'चांगला',
                romanized: 'chaanglaa',
                meaning: 'Good',
                example: 'हा चांगला मुलगा आहे (He is a good boy)',
                audio: 'chaanglaa'
            },
            {
                type: 'teach',
                character: 'वाईट',
                romanized: 'vaait',
                meaning: 'Bad',
                example: 'वाईट सवय सोडा (Leave bad habits)',
                audio: 'vaait'
            },
            {
                type: 'mcq',
                question: 'What does "मोठा" mean?',
                prompt: 'मोठा',
                options: ['Small', 'Good', 'Big', 'Bad'],
                correct: 2
            },
            {
                type: 'teach',
                character: 'गरम',
                romanized: 'garam',
                meaning: 'Hot',
                example: 'चहा गरम आहे (Tea is hot)',
                audio: 'garam'
            },
            {
                type: 'teach',
                character: 'थंड',
                romanized: 'thand',
                meaning: 'Cold',
                example: 'पाणी थंड आहे (Water is cold)',
                audio: 'thand'
            },
            {
                type: 'teach',
                character: 'नवीन',
                romanized: 'naveen',
                meaning: 'New',
                example: 'नवीन कपडे (New clothes)',
                audio: 'naveen'
            },
            {
                type: 'teach',
                character: 'जुने',
                romanized: 'june',
                meaning: 'Old (for things)',
                example: 'जुने घर (Old house)',
                audio: 'june'
            },
            {
                type: 'mcq',
                question: 'Which word means "Cold"?',
                prompt: '🥶',
                options: ['गरम', 'मोठा', 'थंड', 'नवीन'],
                correct: 2
            },
            {
                type: 'match',
                question: 'Match adjectives with opposites:',
                pairs: [
                    { left: 'मोठा', right: 'Big' },
                    { left: 'लहान', right: 'Small' },
                    { left: 'गरम', right: 'Hot' },
                    { left: 'थंड', right: 'Cold' }
                ]
            },
            {
                type: 'cultural',
                emoji: '📝',
                title: 'Gender in Adjectives',
                text: 'Marathi adjectives change based on gender! "मोठा" (big) is masculine, "मोठी" is feminine, and "मोठे" is neuter. For example: मोठा मुलगा (big boy), मोठी मुलगी (big girl), मोठे घर (big house). This three-gender system is unique to Marathi among major Indian languages!'
            }
        ]
    },
    {
        id: 14,
        title_mr: 'पुनरावलोकन',
        title_en: 'Level 1 Review',
        desc: 'Review & assessment',
        icon: '🏆',
        xp: 50,
        words: 0,
        steps: [
            {
                type: 'mcq',
                question: 'Which vowel sounds like "a" in "father"?',
                prompt: '🔤 Vowels Review',
                options: ['अ', 'आ', 'इ', 'उ'],
                correct: 1
            },
            {
                type: 'mcq',
                question: 'What does "घर" mean?',
                prompt: 'घर',
                options: ['Tree', 'House', 'Water', 'School'],
                correct: 1
            },
            {
                type: 'mcq',
                question: 'What is "7" in Marathi?',
                prompt: '7 = ?',
                options: ['पाच', 'आठ', 'सात', 'नऊ'],
                correct: 2
            },
            {
                type: 'match',
                question: 'Match colors:',
                pairs: [
                    { left: 'लाल', right: 'Red' },
                    { left: 'निळा', right: 'Blue' },
                    { left: 'हिरवा', right: 'Green' },
                    { left: 'पिवळा', right: 'Yellow' }
                ]
            },
            {
                type: 'mcq',
                question: 'Who is "आजी"?',
                prompt: 'आजी',
                options: ['Mother', 'Sister', 'Grandmother', 'Aunt'],
                correct: 2
            },
            {
                type: 'mcq',
                question: 'What does "डोळे" mean?',
                prompt: 'डोळे',
                options: ['Ears', 'Eyes', 'Nose', 'Hands'],
                correct: 1
            },
            {
                type: 'fill',
                question: 'Fill in the blank:',
                sentence: '___ गोड आहे (Mango is sweet)',
                answer: 'आंबा',
                options: ['केळे', 'आंबा', 'संत्रे', 'बटाटा']
            },
            {
                type: 'match',
                question: 'Match animals:',
                pairs: [
                    { left: 'कुत्रा', right: 'Dog' },
                    { left: 'मांजर', right: 'Cat' },
                    { left: 'घोडा', right: 'Horse' },
                    { left: 'हत्ती', right: 'Elephant' }
                ]
            },
            {
                type: 'mcq',
                question: 'Which word means "Monday"?',
                prompt: '📅',
                options: ['रविवार', 'शनिवार', 'सोमवार', 'मंगळवार'],
                correct: 2
            },
            {
                type: 'mcq',
                question: 'What does "मोठा" mean?',
                prompt: 'मोठा',
                options: ['Small', 'Hot', 'New', 'Big'],
                correct: 3
            },
            {
                type: 'mcq',
                question: 'Which letter is unique to Marathi?',
                prompt: '❓',
                options: ['क', 'प', 'ळ', 'म'],
                correct: 2
            },
            {
                type: 'cultural',
                emoji: '🏆',
                title: 'Level 1 Complete! अभिनंदन!',
                text: 'Congratulations (अभिनंदन)! You have completed Level 1 of Marathi! You now know the Devanagari script, numbers, colors, family members, body parts, fruits, vegetables, animals, objects, days, and adjectives. You are ready for Level 2 — sentence formation and grammar! जय महाराष्ट्र!'
            }
        ]
    },
];

// ===== FLASHCARD DATA =====
const FLASHCARDS = [
    { marathi: 'आई', english: 'Mother', pron: 'aai', example: 'माझी आई सुंदर आहे' },
    { marathi: 'बाबा', english: 'Father', pron: 'baba', example: 'माझे बाबा काम करतात' },
    { marathi: 'घर', english: 'House', pron: 'ghar', example: 'माझे घर मोठे आहे' },
    { marathi: 'पाणी', english: 'Water', pron: 'paani', example: 'मला पाणी हवे आहे' },
    { marathi: 'शाळा', english: 'School', pron: 'shaala', example: 'मी शाळेत जातो' },
    { marathi: 'झाड', english: 'Tree', pron: 'zhaad', example: 'झाड हिरवे आहे' },
    { marathi: 'फूल', english: 'Flower', pron: 'phool', example: 'फूल सुंदर आहे' },
    { marathi: 'हत्ती', english: 'Elephant', pron: 'hatti', example: 'हत्ती मोठा प्राणी आहे' },
    { marathi: 'दूध', english: 'Milk', pron: 'doodh', example: 'मला दूध आवडते' },
    { marathi: 'नदी', english: 'River', pron: 'nadi', example: 'नदी वाहते' },
    { marathi: 'तारा', english: 'Star', pron: 'taaraa', example: 'आकाशात तारा चमकतो' },
    { marathi: 'गाय', english: 'Cow', pron: 'gaay', example: 'गाय दूध देते' },
    { marathi: 'चहा', english: 'Tea', pron: 'chahaa', example: 'मला चहा हवा आहे' },
    { marathi: 'मासा', english: 'Fish', pron: 'maasa', example: 'मासा पाण्यात राहतो' },
    { marathi: 'सूर्य', english: 'Sun', pron: 'surya', example: 'सूर्य उगवतो' },
];

// ===== CULTURAL NOTES DATA =====
const CULTURAL_NOTES = [
    {
        emoji: '🎪',
        category: 'Festival',
        title: 'गणपती बाप्पा मोरया! — Ganpati Festival',
        text: 'The Ganpati festival is Maharashtra\'s biggest celebration! For 10 days, homes and public pandals welcome Lord Ganesha. The festival ends with a grand procession (विसर्जन) where idols are immersed in water, with chants of "गणपती बाप्पा मोरया, पुढच्या वर्षी लवकर या!" (Come again next year!)'
    },
    {
        emoji: '🍛',
        category: 'Food',
        title: 'वडा पाव — The Mumbai Burger',
        text: 'Vada Pav (वडा पाव) is Maharashtra\'s iconic street food — a spicy potato fritter sandwiched in a pav bread with chutneys. Often called the "Indian burger," it costs just ₹15-30 and is the lifeblood of Mumbai\'s streets. The word "वडा" means a fried dumpling.'
    },
    {
        emoji: '🎨',
        category: 'Art',
        title: 'वारली चित्रकला — Warli Art',
        text: 'Warli (वारली) art is an ancient tribal art form from the Warli tribe of Maharashtra. Using simple geometric shapes — circles, triangles, and lines — they depict daily life, celebrations, and nature. This 2,500-year-old art style was only recognized in the 1970s!'
    },
    {
        emoji: '🏰',
        category: 'History',
        title: 'छत्रपती शिवाजी महाराज',
        text: 'Chhatrapati Shivaji Maharaj (1630-1680) founded the Maratha Empire and is one of Maharashtra\'s most revered heroes. He established "स्वराज्य" (self-rule) and built over 300 forts across the Sahyadri mountains. His legacy deeply influences Marathi language and culture.'
    },
    {
        emoji: '🎶',
        category: 'Tradition',
        title: 'लावणी — Lavani Dance',
        text: 'Lavani (लावणी) is Maharashtra\'s traditional dance form, known for its powerful rhythm and expressive movements. Performed to the beats of the ढोलकी (dholki drum), Lavani combines storytelling with dance, often portraying themes of love and social issues.'
    },
    {
        emoji: '🌾',
        category: 'Festival',
        title: 'गुढीपाडवा — Marathi New Year',
        text: 'Gudhi Padwa (गुढीपाडवा) marks the Marathi New Year celebrated in spring (March/April). Families raise a "गुढी" — a silk cloth tied on a bamboo stick, topped with a copper pot — symbolizing victory and prosperity. Traditional शेवया (noodle pudding) is prepared!'
    },
    {
        emoji: '🥘',
        category: 'Food',
        title: 'पुरणपोळी — The Festive Sweet',
        text: 'Puranpoli (पुरणपोळी) is Maharashtra\'s beloved festive sweet flatbread, filled with a mixture of chana dal and jaggery (गूळ). This dish is a must-have during Gudhi Padwa and Diwali. Every Maharashtrian grandmother has her secret recipe!'
    },
    {
        emoji: '🏔️',
        category: 'Geography',
        title: 'सह्याद्री — The Western Ghats',
        text: 'The Sahyadri mountains (सह्याद्री) are the backbone of Maharashtra, stretching along the western coast. A UNESCO World Heritage Site, they\'re home to diverse wildlife, stunning waterfalls like दूधसागर, and over 350 historical forts.'
    }
];

// ===== BADGES DATA =====
const BADGES = [
    { emoji: '🌟', name: 'First Steps', desc: 'Complete your first lesson', earned: false },
    { emoji: '🔥', name: '3-Day Streak', desc: 'Learn 3 days in a row', earned: false },
    { emoji: '📚', name: 'Word Collector', desc: 'Learn 50 words', earned: false },
    { emoji: '🏆', name: 'Level 1 Master', desc: 'Complete Level 1', earned: false },
    { emoji: '💎', name: 'Perfect Score', desc: '100% on any quiz', earned: false },
    { emoji: '🦚', name: 'Culture Explorer', desc: 'Read 5 cultural notes', earned: false },
    { emoji: '⚡', name: 'Speed Learner', desc: 'Complete 5 lessons in a day', earned: false },
    { emoji: '🎯', name: 'Sharpshooter', desc: '10 correct answers in a row', earned: false },
];

// ===== SCREEN NAVIGATION =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId + '-screen');
    if (screen) {
        screen.classList.add('active');
        AppState.currentScreen = screenId;
    }

    // Update content when navigating to specific screens
    if (screenId === 'dashboard') {
        updateDashboard();
    } else if (screenId === 'lessons-list') {
        renderLessonsList();
    } else if (screenId === 'flashcards') {
        renderFlashcard();
    } else if (screenId === 'profile') {
        updateProfile();
    } else if (screenId === 'cultural-notes') {
        renderCulturalNotes();
    }
}

function switchTab(btn, screenId) {
    // Update active states in the CURRENT bottom nav
    const nav = btn.closest('.bottom-nav');
    nav.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    btn.classList.add('active');
    showScreen(screenId);
}

// ===== ONBOARDING =====
function nextOnboardingSlide() {
    AppState.onboardingStep++;
    const slides = document.querySelectorAll('.onboarding-slide');
    const dots = document.querySelectorAll('.onboarding-dots .dot');

    if (AppState.onboardingStep >= slides.length) {
        showScreen('dashboard');
        return;
    }

    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[AppState.onboardingStep].classList.add('active');
    dots[AppState.onboardingStep].classList.add('active');

    if (AppState.onboardingStep === slides.length - 1) {
        document.getElementById('btn-next-onboarding').innerHTML = '<span>Start Learning</span>';
    }
}

// ===== DASHBOARD =====
function updateDashboard() {
    document.getElementById('streak-count').textContent = AppState.streak;
    document.getElementById('xp-count').textContent = AppState.xp;
    document.getElementById('hearts-count').textContent = AppState.hearts;

    // Continue card
    const lesson = LESSONS[AppState.currentLesson];
    if (lesson) {
        document.getElementById('continue-lesson-title').textContent =
            `Lesson ${lesson.id + 1}: ${lesson.title_mr} (${lesson.title_en})`;
    }

    // Daily goal
    const goalPercent = Math.min((AppState.dailyXP / AppState.dailyGoal) * 100, 100);
    document.getElementById('daily-goal-fill').style.width = goalPercent + '%';
    document.getElementById('daily-goal-status').textContent = `${AppState.dailyXP}/${AppState.dailyGoal} XP`;

    // Render lesson grid
    renderLessonGrid();
}

function renderLessonGrid() {
    const grid = document.getElementById('lesson-grid');
    grid.innerHTML = '';

    LESSONS.forEach((lesson, i) => {
        const node = document.createElement('div');
        node.className = 'lesson-node';

        if (i < AppState.currentLesson) {
            node.classList.add('completed');
            node.innerHTML = `
                <span class="lesson-node-icon">✅</span>
                <span class="lesson-node-label">${lesson.title_mr}</span>
            `;
        } else if (i === AppState.currentLesson) {
            node.classList.add('current');
            node.innerHTML = `
                <span class="lesson-node-icon">${lesson.icon}</span>
                <span class="lesson-node-label">${lesson.title_mr}</span>
            `;
        } else {
            node.classList.add('locked');
            node.innerHTML = `
                <span class="lesson-node-icon">🔒</span>
                <span class="lesson-node-label">${lesson.title_mr}</span>
            `;
        }

        node.onclick = () => {
            if (i <= AppState.currentLesson && lesson.steps.length > 0) {
                const prevLesson = AppState.currentLesson;
                AppState.currentLesson = i;
                startCurrentLesson();
                // Restore currentLesson if replaying an old one
                if (i < prevLesson) {
                    AppState._replayingLesson = prevLesson;
                }
            } else if (node.classList.contains('locked')) {
                node.style.animation = 'shake 0.4s ease';
                setTimeout(() => node.style.animation = '', 400);
            }
        };

        grid.appendChild(node);
    });
}


// ===== LESSONS LIST =====
function renderLessonsList() {
    const content = document.getElementById('lessons-list-content');
    content.innerHTML = `
        <div class="lesson-list-level">
            <div class="lesson-list-level-header">
                <span>🏮</span> Level 1: मूलभूत (Basics)
            </div>
            ${LESSONS.map((lesson, i) => {
                let statusClass = 'locked';
                let statusIcon = '🔒';
                if (i < AppState.currentLesson) {
                    statusClass = 'completed';
                    statusIcon = '✅';
                } else if (i === AppState.currentLesson) {
                    statusClass = 'current';
                    statusIcon = '▶️';
                }
                return `
                    <div class="lesson-list-item ${statusClass}" onclick="${i <= AppState.currentLesson && lesson.steps.length > 0 ? `startLessonById(${i})` : ''}">
                        <div class="lesson-list-num">${i + 1}</div>
                        <div class="lesson-list-info">
                            <div class="lesson-list-title">${lesson.title_mr} (${lesson.title_en})</div>
                            <div class="lesson-list-desc">${lesson.desc} • ${lesson.xp} XP</div>
                        </div>
                        <div class="lesson-list-icon">${statusIcon}</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function startLessonById(id) {
    AppState.currentLesson = id;
    startCurrentLesson();
}

// ===== LESSON ENGINE =====
function startCurrentLesson() {
    const lesson = LESSONS[AppState.currentLesson];
    if (!lesson || lesson.steps.length === 0) {
        alert('This lesson is coming soon! 🚧');
        return;
    }

    AppState.currentStep = 0;
    AppState.hearts = 5;
    AppState.lessonAnswers = { correct: 0, total: 0 };
    AppState.selectedAnswer = null;
    AppState.matchState = { selected: null, matched: [] };

    showScreen('lesson');
    updateLessonUI();
}

function updateLessonUI() {
    const lesson = LESSONS[AppState.currentLesson];
    const step = lesson.steps[AppState.currentStep];
    const progress = ((AppState.currentStep + 1) / lesson.steps.length) * 100;

    document.getElementById('lesson-progress-fill').style.width = progress + '%';
    document.getElementById('lesson-hearts').textContent = '❤️'.repeat(AppState.hearts) + '🤍'.repeat(5 - AppState.hearts);

    const content = document.getElementById('lesson-content');

    // Remove existing feedback
    document.querySelectorAll('.feedback-bar').forEach(el => el.remove());

    switch (step.type) {
        case 'teach':
            content.innerHTML = renderTeachStep(step);
            break;
        case 'mcq':
            content.innerHTML = renderMCQStep(step);
            break;
        case 'fill':
            content.innerHTML = renderFillStep(step);
            break;
        case 'match':
            content.innerHTML = renderMatchStep(step);
            break;
        case 'cultural':
            content.innerHTML = renderCulturalStep(step);
            break;
    }
}

function renderTeachStep(step) {
    return `
        <div class="lesson-teach-card">
            <div class="lesson-teach-character">${step.character}</div>
            <div class="lesson-teach-romanized">${step.romanized}</div>
            <div class="lesson-teach-meaning">${step.meaning}</div>
            <button class="btn-audio" onclick="speakWord('${step.character}')">🔊</button>
            <div class="lesson-teach-example">${step.example}</div>
        </div>
        <div class="lesson-action">
            <button class="btn-check btn-next" onclick="nextStep()">Continue</button>
        </div>
    `;
}

function renderMCQStep(step) {
    AppState.selectedAnswer = null;
    return `
        <p class="quiz-question">${step.question}</p>
        <div class="quiz-prompt">${step.prompt}</div>
        <div class="quiz-options">
            ${step.options.map((opt, i) => `
                <button class="quiz-option" id="quiz-opt-${i}" onclick="selectMCQAnswer(${i}, ${step.correct})">
                    ${opt}
                </button>
            `).join('')}
        </div>
        <div class="lesson-action">
            <button class="btn-check" id="btn-check-answer" onclick="checkMCQAnswer()" disabled>Check</button>
        </div>
    `;
}

function renderFillStep(step) {
    return `
        <p class="quiz-question">${step.question}</p>
        <div class="fill-blank-sentence">${step.sentence.replace('___', `<span class="fill-blank-input" id="fill-answer">?</span>`)}</div>
        <div class="quiz-options">
            ${step.options.map((opt, i) => `
                <button class="quiz-option" id="fill-opt-${i}" onclick="selectFillAnswer('${opt}', ${i}, '${step.answer}')">
                    ${opt}
                </button>
            `).join('')}
        </div>
        <div class="lesson-action">
            <button class="btn-check" id="btn-check-answer" onclick="checkFillAnswer('${step.answer}')" disabled>Check</button>
        </div>
    `;
}

function renderMatchStep(step) {
    AppState.matchState = { selected: null, matched: [] };
    // Shuffle right column
    const shuffledRight = [...step.pairs].sort(() => Math.random() - 0.5);

    return `
        <p class="quiz-question">${step.question}</p>
        <div class="match-container">
            <div class="match-column" id="match-left">
                ${step.pairs.map((p, i) => `
                    <div class="match-item" id="match-l-${i}" data-value="${p.left}" data-index="${i}" onclick="selectMatchItem('left', ${i}, '${p.left}')">
                        ${p.left}
                    </div>
                `).join('')}
            </div>
            <div class="match-column" id="match-right">
                ${shuffledRight.map((p, i) => `
                    <div class="match-item" id="match-r-${i}" data-value="${p.right}" data-pair="${step.pairs.findIndex(pp => pp.right === p.right)}" onclick="selectMatchItem('right', ${i}, '${p.right}', ${step.pairs.findIndex(pp => pp.right === p.right)})">
                        ${p.right}
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="lesson-action">
            <button class="btn-check btn-next" id="btn-match-continue" onclick="nextStep()" style="display:none">Continue</button>
        </div>
    `;
}

function renderCulturalStep(step) {
    return `
        <div class="cultural-note-card" style="margin-top: 20px;">
            <div class="cultural-note-header">
                <span class="cultural-note-emoji">${step.emoji}</span>
                <span class="cultural-note-category">Cultural Note</span>
            </div>
            <h3 class="cultural-note-title">${step.title}</h3>
            <p class="cultural-note-text">${step.text}</p>
        </div>
        <div class="lesson-action">
            <button class="btn-check btn-next" onclick="finishLesson()">Complete Lesson 🎉</button>
        </div>
    `;
}

// ===== MCQ LOGIC =====
function selectMCQAnswer(index, correctIndex) {
    if (AppState.selectedAnswer !== null) return;
    AppState.selectedAnswer = index;

    document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
    document.getElementById(`quiz-opt-${index}`).classList.add('selected');
    document.getElementById('btn-check-answer').disabled = false;
}

function checkMCQAnswer() {
    const lesson = LESSONS[AppState.currentLesson];
    const step = lesson.steps[AppState.currentStep];
    const isCorrect = AppState.selectedAnswer === step.correct;

    AppState.lessonAnswers.total++;

    // Disable all options
    document.querySelectorAll('.quiz-option').forEach(el => el.classList.add('disabled'));

    if (isCorrect) {
        AppState.lessonAnswers.correct++;
        document.getElementById(`quiz-opt-${AppState.selectedAnswer}`).classList.add('correct');
        showFeedback(true, 'Correct! 🎉');
    } else {
        AppState.hearts = Math.max(0, AppState.hearts - 1);
        document.getElementById(`quiz-opt-${AppState.selectedAnswer}`).classList.add('incorrect');
        document.getElementById(`quiz-opt-${step.correct}`).classList.add('correct');
        showFeedback(false, `The answer is: ${step.options[step.correct]}`);
        document.getElementById('lesson-hearts').textContent = '❤️'.repeat(AppState.hearts) + '🤍'.repeat(5 - AppState.hearts);
    }

    // Change button to "Continue"
    const btn = document.getElementById('btn-check-answer');
    btn.textContent = 'Continue';
    btn.classList.add('btn-next');
    btn.disabled = false;
    btn.onclick = () => {
        removeFeedback();
        nextStep();
    };
}

// ===== FILL IN THE BLANK LOGIC =====
function selectFillAnswer(answer, index, correctAnswer) {
    AppState.selectedAnswer = answer;
    document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
    document.getElementById(`fill-opt-${index}`).classList.add('selected');
    document.getElementById('fill-answer').textContent = answer;
    document.getElementById('btn-check-answer').disabled = false;
}

function checkFillAnswer(correctAnswer) {
    const isCorrect = AppState.selectedAnswer === correctAnswer;
    AppState.lessonAnswers.total++;

    document.querySelectorAll('.quiz-option').forEach(el => el.classList.add('disabled'));

    if (isCorrect) {
        AppState.lessonAnswers.correct++;
        showFeedback(true, 'Perfect! 🎉');
    } else {
        AppState.hearts = Math.max(0, AppState.hearts - 1);
        showFeedback(false, `The answer is: ${correctAnswer}`);
        document.getElementById('lesson-hearts').textContent = '❤️'.repeat(AppState.hearts) + '🤍'.repeat(5 - AppState.hearts);
    }

    const btn = document.getElementById('btn-check-answer');
    btn.textContent = 'Continue';
    btn.classList.add('btn-next');
    btn.disabled = false;
    btn.onclick = () => {
        removeFeedback();
        nextStep();
    };
}

// ===== MATCH LOGIC =====
function selectMatchItem(side, index, value, pairIndex) {
    if (AppState.matchState.matched.includes(value)) return;

    if (side === 'left') {
        // Deselect previous left
        document.querySelectorAll('#match-left .match-item').forEach(el => el.classList.remove('selected'));
        document.getElementById(`match-l-${index}`).classList.add('selected');
        AppState.matchState.selected = { side: 'left', index, value };
    } else {
        if (AppState.matchState.selected && AppState.matchState.selected.side === 'left') {
            // Check if match is correct
            const lesson = LESSONS[AppState.currentLesson];
            const step = lesson.steps[AppState.currentStep];
            const leftIdx = AppState.matchState.selected.index;
            const leftValue = AppState.matchState.selected.value;

            if (step.pairs[leftIdx].right === value) {
                // Correct match!
                document.getElementById(`match-l-${leftIdx}`).classList.remove('selected');
                document.getElementById(`match-l-${leftIdx}`).classList.add('matched');
                document.getElementById(`match-r-${index}`).classList.add('matched');
                AppState.matchState.matched.push(leftValue, value);
                AppState.matchState.selected = null;

                // Check if all matched
                if (AppState.matchState.matched.length === step.pairs.length * 2) {
                    AppState.lessonAnswers.correct++;
                    AppState.lessonAnswers.total++;
                    setTimeout(() => {
                        document.getElementById('btn-match-continue').style.display = 'block';
                    }, 500);
                }
            } else {
                // Incorrect
                const leftEl = document.getElementById(`match-l-${leftIdx}`);
                const rightEl = document.getElementById(`match-r-${index}`);
                leftEl.style.animation = 'shake 0.4s ease';
                rightEl.style.animation = 'shake 0.4s ease';
                setTimeout(() => {
                    leftEl.style.animation = '';
                    rightEl.style.animation = '';
                    leftEl.classList.remove('selected');
                }, 400);
                AppState.matchState.selected = null;
            }
        } else {
            // Select right (need left first)
            document.querySelectorAll('#match-right .match-item').forEach(el => el.classList.remove('selected'));
            document.getElementById(`match-r-${index}`).classList.add('selected');
        }
    }
}

// ===== FEEDBACK =====
function showFeedback(isCorrect, message) {
    const existing = document.querySelector('.feedback-bar');
    if (existing) existing.remove();

    const feedbackEl = document.createElement('div');
    feedbackEl.className = `feedback-bar ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackEl.innerHTML = `
        <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
        <div class="feedback-text">
            <h4>${isCorrect ? 'Awesome!' : 'Not quite'}</h4>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(feedbackEl);
}

function removeFeedback() {
    document.querySelectorAll('.feedback-bar').forEach(el => el.remove());
}

// ===== LESSON NAVIGATION =====
function nextStep() {
    const lesson = LESSONS[AppState.currentLesson];
    AppState.currentStep++;

    if (AppState.currentStep >= lesson.steps.length) {
        finishLesson();
    } else {
        updateLessonUI();
    }
}

function finishLesson() {
    const lesson = LESSONS[AppState.currentLesson];
    const accuracy = AppState.lessonAnswers.total > 0
        ? Math.round((AppState.lessonAnswers.correct / AppState.lessonAnswers.total) * 100)
        : 100;

    // Check if replaying an old lesson
    const isReplay = AppState._replayingLesson !== undefined;

    // Award XP
    AppState.xp += lesson.xp;
    AppState.dailyXP += lesson.xp;
    
    if (!isReplay) {
        AppState.wordsLearned += lesson.words;
        AppState.lessonsCompleted++;

        // Unlock next lesson
        if (AppState.currentLesson < LESSONS.length - 1) {
            AppState.currentLesson++;
        }
    } else {
        // Restore the actual current lesson pointer
        AppState.currentLesson = AppState._replayingLesson;
        delete AppState._replayingLesson;
    }

    // Update badges
    if (AppState.lessonsCompleted >= 1) BADGES[0].earned = true;
    if (accuracy === 100) BADGES[4].earned = true;
    if (AppState.wordsLearned >= 50) BADGES[2].earned = true;
    if (AppState.lessonsCompleted >= 15) BADGES[3].earned = true;

    // Show completion modal
    document.getElementById('complete-xp').textContent = `+${lesson.xp}`;
    document.getElementById('complete-accuracy').textContent = `${accuracy}%`;
    document.getElementById('complete-words').textContent = lesson.words;

    showScreen('dashboard');
    document.getElementById('lesson-complete-modal').classList.add('active');
    createConfetti();

    // Save state
    saveState();
}


function exitLesson() {
    removeFeedback();
    showScreen('dashboard');
}

function closeLessonComplete() {
    document.getElementById('lesson-complete-modal').classList.remove('active');
    document.getElementById('confetti-container').innerHTML = '';
    updateDashboard();
}

// ===== CONFETTI =====
function createConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    const colors = ['#FF6B35', '#FFB900', '#34D399', '#60A5FA', '#E84393', '#A78BFA'];

    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 2 + 's';
        piece.style.animationDuration = (2 + Math.random() * 2) + 's';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        piece.style.width = (6 + Math.random() * 8) + 'px';
        piece.style.height = (6 + Math.random() * 8) + 'px';
        container.appendChild(piece);
    }
}

// ===== FLASHCARDS =====
function renderFlashcard() {
    if (AppState.currentFlashcardIndex >= FLASHCARDS.length) {
        AppState.currentFlashcardIndex = 0;
    }

    const card = FLASHCARDS[AppState.currentFlashcardIndex];
    const flashcardEl = document.getElementById('flashcard');
    flashcardEl.classList.remove('flipped');

    document.getElementById('flashcard-word').textContent = card.marathi;
    document.getElementById('flashcard-meaning').textContent = card.english;
    document.getElementById('flashcard-pron').textContent = card.pron;
    document.getElementById('flashcard-example').textContent = card.example;
    document.getElementById('flashcard-counter').textContent =
        `Card ${AppState.currentFlashcardIndex + 1} of ${FLASHCARDS.length}`;
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function rateFlashcard(rating) {
    // In a full app, this would update SRS intervals
    AppState.currentFlashcardIndex++;
    renderFlashcard();
}

// ===== PROFILE =====
function updateProfile() {
    document.getElementById('profile-streak').textContent = AppState.streak;
    document.getElementById('profile-xp').textContent = AppState.xp;
    document.getElementById('profile-words').textContent = AppState.wordsLearned;
    document.getElementById('profile-lessons').textContent = AppState.lessonsCompleted;

    // Badges
    const badgesGrid = document.getElementById('badges-grid');
    badgesGrid.innerHTML = BADGES.map(badge => `
        <div class="badge-item ${badge.earned ? '' : 'locked'}">
            ${badge.emoji}
            <span class="badge-tooltip">${badge.name}</span>
        </div>
    `).join('');

    // Weekly chart
    const chart = document.getElementById('weekly-chart');
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const today = new Date().getDay();
    const maxXP = Math.max(...AppState.weeklyActivity, 1);

    chart.innerHTML = days.map((day, i) => {
        const xp = AppState.weeklyActivity[i];
        const height = xp > 0 ? Math.max(10, (xp / maxXP) * 80) : 0;
        const isToday = i === (today === 0 ? 6 : today - 1);
        return `
            <div class="week-day ${isToday ? 'today' : ''}">
                <div class="week-bar ${xp === 0 ? 'empty' : ''}" style="height: ${height}px"></div>
                <span class="week-label">${day}</span>
            </div>
        `;
    }).join('');
}

// ===== CULTURAL NOTES =====
function renderCulturalNotes() {
    const content = document.getElementById('cultural-notes-content');
    content.innerHTML = CULTURAL_NOTES.map((note, i) => `
        <div class="cultural-note-card" style="animation-delay: ${i * 0.1}s">
            <div class="cultural-note-header">
                <span class="cultural-note-emoji">${note.emoji}</span>
                <span class="cultural-note-category">${note.category}</span>
            </div>
            <h3 class="cultural-note-title">${note.title}</h3>
            <p class="cultural-note-text">${note.text}</p>
        </div>
    `).join('');
}

// ===== AUDIO (Text-to-Speech) =====
function speakWord(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'hi-IN'; // Hindi is closest available for Devanagari
        utterance.rate = 0.8;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    }
}

// ===== PERSISTENCE =====
function saveState() {
    try {
        localStorage.setItem('bola_state', JSON.stringify({
            xp: AppState.xp,
            streak: AppState.streak,
            currentLesson: AppState.currentLesson,
            wordsLearned: AppState.wordsLearned,
            lessonsCompleted: AppState.lessonsCompleted,
            dailyXP: AppState.dailyXP,
            badges: BADGES.map(b => b.earned),
            weeklyActivity: AppState.weeklyActivity,
            lastSaved: new Date().toISOString()
        }));
    } catch (e) {
        // localStorage not available
    }
}

function loadState() {
    try {
        const saved = localStorage.getItem('bola_state');
        if (saved) {
            const data = JSON.parse(saved);
            AppState.xp = data.xp || 0;
            AppState.streak = data.streak || 1;
            AppState.currentLesson = data.currentLesson || 0;
            AppState.wordsLearned = data.wordsLearned || 0;
            AppState.lessonsCompleted = data.lessonsCompleted || 0;
            AppState.dailyXP = data.dailyXP || 0;
            if (data.badges) {
                data.badges.forEach((earned, i) => {
                    if (BADGES[i]) BADGES[i].earned = earned;
                });
            }
            if (data.weeklyActivity) {
                AppState.weeklyActivity = data.weeklyActivity;
            }
        }
    } catch (e) {
        // localStorage not available
    }
}

// ===== START CURRENT LESSON SHORTCUT =====
function startCurrentLesson() {
    const lesson = LESSONS[AppState.currentLesson];
    if (!lesson || lesson.steps.length === 0) {
        alert('This lesson is coming soon! More content being added. 🚧');
        return;
    }

    AppState.currentStep = 0;
    AppState.hearts = 5;
    AppState.lessonAnswers = { correct: 0, total: 0 };
    AppState.selectedAnswer = null;
    AppState.matchState = { selected: null, matched: [] };

    showScreen('lesson');
    updateLessonUI();
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadState();

    // If user has progress, skip splash screen
    if (AppState.lessonsCompleted > 0) {
        showScreen('dashboard');
    }
});

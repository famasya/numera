export type IconKey =
	| "percent"
	| "wallet"
	| "package"
	| "receipt"
	| "sparkles"
	| "timer"
	| "layers"
	| "dice"
	| "chart"
	| "trend";

export type FeatureItem = {
	title: string;
	description: string;
	icon: IconKey;
};

export type UseCaseItem = {
	title: string;
	description: string;
	example: string;
	icon: IconKey;
};

export type PracticeStep = {
	index: number;
	title: string;
	explanation: string;
	result: string;
};

export type PracticeScenarioStatus = "available" | "upcoming";

export type PracticeScenario = {
	slug: string;
	title: string;
	duration: string;
	status: PracticeScenarioStatus;
	context: string;
	question: string;
	insight: string;
	answer: string;
	steps: PracticeStep[];
};

export type SessionBlockId = "hook" | "concept" | "real-world" | "quiz";

export type DailySessionBlock = {
	id: SessionBlockId;
	title: string;
	duration: string;
	description: string;
};

export type CurriculumPhase = {
	phase: string;
	title: string;
	focus: string;
	duration: string;
};

export type PhaseModule = {
	title: string;
	description: string;
};

export type RealWorldExample = {
	context: string;
	description: string;
};

export type QuizOption = {
	id: "A" | "B" | "C" | "D";
	text: string;
	isCorrect: boolean;
	rationale: string;
};

export type DailySession = {
	dayLabel: string;
	phaseLabel: string;
	moduleLabel: string;
	topic: string;
	totalDuration: string;
	principle: string;
	hook: {
		lines: string[];
		question: string;
	};
	concept: {
		title: string;
		description: string[];
		steps: PracticeStep[];
		takeaway: string;
	};
	realWorld: RealWorldExample[];
	quiz: {
		prompt: string;
		options: QuizOption[];
		feedbackTitle: string;
		explanation: string;
		commonMistake: string;
	};
};

export const landingStats = [
	{
		label: "Per sesi",
		value: "5-7 menit",
	},
	{
		label: "Tiap sesi",
		value: "4 langkah ringan",
	},
	{
		label: "Total kurikulum",
		value: "6 fase",
	},
];

export const useCases: UseCaseItem[] = [
	{
		title: "Peluang yang kerap menjebak",
		description:
			"Kenali saat intuisi soal peluang terasa masuk akal, padahal justru menyesatkan.",
		example: "Setelah 10× angka berturut-turut, apakah kepala jadi lebih mungkin?",
		icon: "dice",
	},
	{
		title: "Rata-rata yang menipu",
		description:
			"Belajar membaca data apa adanya, terutama saat satu angka ekstrem menarik rata-rata terlalu jauh.",
		example: "Gaji CEO bisa membuat “rata-rata gaji” terlihat jauh lebih tinggi dari kenyataan.",
		icon: "chart",
	},
	{
		title: "Compound effect",
		description:
			"Lihat kenapa pertumbuhan kecil yang konsisten bisa terasa lambat di awal, lalu tiba-tiba melonjak.",
		example: "Rp1.000 per hari + 10% per tahun terasa kecil — sampai waktunya cukup panjang.",
		icon: "trend",
	},
	{
		title: "Proporsi sehari-hari",
		description:
			"Hal-hal praktikal seperti diskon, harga per unit, dan bagi-bagi tagihan juga dibahas.",
		example: "Diskon, split bill, service charge, dan perbandingan ukuran produk.",
		icon: "receipt",
	},
];

export const featureItems: FeatureItem[] = [
	{
		title: "Satu insight per sesi",
		description:
			"Tiap sesi cuma bawa satu ide inti, biar paham beneran — bukan cuma banyak tapi lewat.",
		icon: "timer",
	},
	{
		title: "Retrieval practice",
		description: "Ada quiz singkat di akhir sesi buat mengunci pemahaman, bukan cuma baca doang.",
		icon: "layers",
	},
	{
		title: "Spiral curriculum",
		description:
			"Konsep yang sama bakal muncul lagi di fase berikutnya, dengan konteks lebih kaya dan lebih menantang.",
		icon: "sparkles",
	},
];

export const dailySessionBlocks: DailySessionBlock[] = [
	{
		id: "hook",
		title: "Pembuka",
		duration: "30 detik",
		description:
			"Mulai dari satu kejadian yang bikin kamu mikir, “masa iya?”",
	},
	{
		id: "concept",
		title: "Ide inti",
		duration: "2 menit",
		description:
			"Satu gagasan penting, dijelasin pakai bahasa sehari-hari yang tetap akurat.",
	},
	{
		id: "real-world",
		title: "Contoh nyata",
		duration: "1.5 menit",
		description:
			"Ide yang sama ternyata sering muncul di keputusan dan situasi yang sudah kamu kenal.",
	},
	{
		id: "quiz",
		title: "Cek pemahaman",
		duration: "1-2 menit",
		description:
			"Satu pertanyaan singkat buat ngecek cara pikirmu, bukan hafalan.",
	},
];

export const curriculumPhases: CurriculumPhase[] = [
	{
		phase: "Fase 1",
		title: "Fondasi Intuitif",
		focus: "Angka, estimasi, dan proporsi",
		duration: "6-8 minggu",
	},
	{
		phase: "Fase 2",
		title: "Bahasa Pola",
		focus: "Aljabar sebagai pola yang berulang",
		duration: "6-8 minggu",
	},
	{
		phase: "Fase 3",
		title: "Dunia Visual",
		focus: "Geometri, ruang, dan grafik",
		duration: "4-6 minggu",
	},
	{
		phase: "Fase 4",
		title: "Berpikir Probabilistik",
		focus: "Peluang, risiko, dan keputusan",
		duration: "6-8 minggu",
	},
	{
		phase: "Fase 5",
		title: "Matematika Perubahan",
		focus: "Laju perubahan dan akumulasi",
		duration: "6-8 minggu",
	},
	{
		phase: "Fase 6",
		title: "Sintesis & Penerapan",
		focus: "Menghubungkan semua mental model",
		duration: "4-6 minggu",
	},
];

export const phaseOneModules: PhaseModule[] = [
	{
		title: "Insting numerik",
		description:
			"Belajar naksir besar-kecilnya angka, bikin estimasi, dan sanity check sederhana.",
	},
	{
		title: "Pecahan, rasio & proporsi",
		description:
			"Diskon, cashback, harga per unit, tip, dan split bill jadi bahan latihan proportional thinking.",
	},
	{
		title: "Sistem & satuan",
		description:
			"Konversi ukuran, skala, dan konsistensi satuan biar angka selalu punya makna yang jelas.",
	},
];

export const practiceScenarios: PracticeScenario[] = [
	{
		slug: "koin-tidak-punya-ingatan",
		title: "Koin nggak ingat lemparan sebelumnya",
		duration: "5-7 menit",
		status: "available",
		context: "Fase 4 · Modul 4.1 · Intuitif probabilitas",
		question: "Kalau sudah 10× angka berturut-turut, apa kepala jadi lebih mungkin?",
		insight: "Urutan yang terasa aneh nggak bikin peluang kejadian independen berubah.",
		answer: "Tetap 50%",
		steps: [
			{
				index: 1,
				title: "Pisahkan hasil lama dari lemparan berikutnya",
				explanation:
					"Hasil 10 lemparan tadi memang mengejutkan, tapi semuanya sudah lewat dan nggak ikut nentuin lemparan baru.",
				result: "Streak lama nggak ikut terbawa ke lemparan berikutnya",
			},
			{
				index: 2,
				title: "Cek: apa yang beneran pengaruhi lemparan ini?",
				explanation:
					"Kalau koinnya fair dan cara lemparnya sama, lemparan berikutnya tetap punya dua kemungkinan yang seimbang.",
				result: "Koin fair + lemparan baru = peluangnya tetap sama",
			},
			{
				index: 3,
				title: "Simpulkan peluangnya",
				explanation:
					"Karena tiap lemparan independen, peluang kepala tetap fifty-fifty.",
				result: "Peluang kepala = 50%",
			},
		],
	},
	{
		slug: "rata-rata-yang-menipu",
		title: "Rata-rata yang menipu",
		duration: "5-7 menit",
		status: "upcoming",
		context: "Fase 4 · Modul 4.2 · Mean vs median",
		question: "Kapan angka rata-rata justru menyembunyikan kondisi mayoritas?",
		insight: "Segera hadir.",
		answer: "",
		steps: [],
	},
	{
		slug: "compound-effect",
		title: "Compound effect",
		duration: "5-7 menit",
		status: "upcoming",
		context: "Preview Fase 5 · Pertumbuhan eksponensial",
		question: "Kenapa pertumbuhan kecil yang berulang bisa terasa meledak belakangan?",
		insight: "Segera hadir.",
		answer: "",
		steps: [],
	},
];

export const dailySession: DailySession = {
	dayLabel: "Contoh sesi",
	phaseLabel: "Fase 4 · Berpikir probabilistik",
	moduleLabel: "Modul 4.1 · Intuitif probabilitas",
	topic: "Kenapa koin nggak ingat lemparan sebelumnya",
	totalDuration: "5-7 menit",
	principle:
		"Otak kita suka ngerasa hasil yang beruntun harus segera ‘dibalas’. Padahal buat kejadian independen, masa lalu nggak ngubah peluang berikutnya.",
	hook: {
		lines: [
			"Bayangin koin fair baru aja keluar angka 10 kali berturut-turut.",
			"Banyak orang langsung ngerasa lemparan berikutnya pasti kepala.",
			"Rasanya masuk akal, tapi justru di situlah intuisi sering keliru soal peluang.",
		],
		question: "Apa kepala sekarang memang jadi lebih mungkin muncul?",
	},
	concept: {
		title: "Peluang nggak punya memori",
		description: [
			"Kalau koin fair dilempar berkali-kali, tiap lemparan baru tetap berdiri sendiri. Koinnya nggak tahu apa yang terjadi sebelumnya.",
			"Streak 10 kali angka memang terasa aneh, tapi ‘aneh’ bukan berarti peluang lemparan ke-11 jadi berubah.",
			"Kesalahan yang sering terjadi: otak mencampur keinginan buat seimbang dengan peluang nyata di lemparan berikutnya.",
		],
		steps: [
			{
				index: 1,
				title: "Pisahkan hasil lama dari kejadian berikutnya",
				explanation:
					"10 lemparan tadi memang sudah terjadi, tapi nggak ‘nempel’ ke lemparan ke-11.",
				result: "Hasil lama ≠ penentu hasil berikutnya",
			},
			{
				index: 2,
				title: "Cek apa yang beneran pengaruhi peluang",
				explanation:
					"Kalau koinnya fair dan cara lemparnya nggak berubah, peluang kepala dan angka tetap seimbang.",
				result: "Kepala 50% · Angka 50%",
			},
			{
				index: 3,
				title: "Tahan dorongan buat ‘nyeimbangin’ hasil",
				explanation:
					"Otak pengen lihat urutan panjang segera diimbangi, padahal peluang nggak bekerja kayak gitu di kejadian independen.",
				result: "Koin nggak berusaha ‘balik modal’",
			},
		],
		takeaway:
			"Kalau kejadiannya independen, streak sepanjang apa pun nggak bikin hasil berikutnya jadi lebih ‘due’.",
	},
	realWorld: [
		{
			context: "Roulette & kasino",
			description:
				"Merah keluar berkali-kali bukan berarti hitam jadi lebih wajib muncul di putaran berikutnya.",
		},
		{
			context: "Pilihan ganda yang diacak",
			description:
				"Kalau jawaban ujian sudah B tiga kali berturut-turut, soal berikutnya tetap bisa B lagi kalau urutannya memang acak.",
		},
		{
			context: "Undian independen",
			description:
				"Hasil undian yang sama muncul berkali-kali memang mengejutkan, tapi kejadian berikutnya nggak otomatis membetulkan urutan itu.",
		},
	],
	quiz: {
		prompt:
			"Koin fair baru saja keluar angka 6 kali berturut-turut. Peluang kepala di lemparan berikutnya adalah…",
		options: [
			{
				id: "A",
				text: "Lebih dari 50%, karena kepala sudah lama nggak muncul",
				isCorrect: false,
				rationale:
					"Streak sebelumnya terasa menuntut keseimbangan, tapi perasaan itu nggak ngubah peluang lemparan berikutnya.",
			},
			{
				id: "B",
				text: "Kurang dari 50%, karena angka lagi ‘panas’",
				isCorrect: false,
				rationale:
					"Rangkaian hasil yang sama nggak bikin sisi itu jadi lebih kuat, selama koinnya fair dan lemparannya independen.",
			},
			{
				id: "C",
				text: "Tetap 50%, karena lemparan berikutnya independen",
				isCorrect: true,
				rationale:
					"Hasil sebelumnya nggak ikut nentuin lemparan baru. Kalau koinnya fair, peluang kepala dan angka tetap seimbang.",
			},
			{
				id: "D",
				text: "Tidak bisa diketahui tanpa 10 hasil berikutnya",
				isCorrect: false,
				rationale:
					"Nggak perlu lihat hasil ke depan buat nilai peluang lemparan berikutnya — cukup tahu koinnya fair.",
			},
		],
		feedbackTitle: "Jawaban: C — Tetap 50%",
		explanation:
			"Intinya: tiap lemparan adalah kejadian baru. Selama koinnya fair, peluang kepala tetap 50% meskipun sebelumnya angka muncul beruntun.",
		commonMistake:
			"Otak sering pengen lihat hasil ‘balik seimbang’ secepat mungkin. Itulah jebakan intuisi yang bikin banyak orang merasa kepala sekarang lebih mungkin muncul.",
	},
};

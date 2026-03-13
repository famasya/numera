import { Link, createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
	ArrowRight,
	BadgePercent,
	ChartColumnIncreasing,
	ChevronRight,
	Dices,
	Layers3,
	Package2,
	ReceiptText,
	Sparkles,
	TimerReset,
	TrendingUp,
	WalletCards,
} from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "~/components/ui/button";
import {
	curriculumPhases,
	dailySession,
	dailySessionBlocks,
	featureItems,
	landingStats,
	phaseOneModules,
	practiceScenarios,
	type IconKey,
	useCases,
} from "~/lib/numera-content";
import { cn } from "~/lib/utils";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			...seo({
				title: "Numera | Mental model matematika untuk kehidupan nyata",
				description:
					"Numera bantu orang dewasa melatih cara berpikir matematika lewat peluang, data, pertumbuhan, dan keputusan sehari-hari.",
				keywords: "numera, mental math, probabilitas, data, compound effect, matematika praktikal",
			}),
		],
	}),
	component: Home,
});

const iconMap: Record<IconKey, LucideIcon> = {
	percent: BadgePercent,
	wallet: WalletCards,
	package: Package2,
	receipt: ReceiptText,
	sparkles: Sparkles,
	timer: TimerReset,
	layers: Layers3,
	dice: Dices,
	chart: ChartColumnIncreasing,
	trend: TrendingUp,
};

function Home() {
	const activeScenario = practiceScenarios.find((scenario) => scenario.status === "available");

	if (!activeScenario) {
		return null;
	}

	return (
		<main className="numera-page">
			<div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(64,120,255,0.35),_transparent_42%),radial-gradient(circle_at_top_right,_rgba(255,164,86,0.24),_transparent_35%)]" />
			<section className="numera-section pb-12 pt-6 md:pb-16 md:pt-8">
				<header className="numera-card flex items-center justify-between gap-4 px-5 py-4 md:px-6">
					<Link to="/" className="flex items-center gap-3 text-slate-900">
						<span className="flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,#2f67f6,#6fa6ff)] text-lg font-black text-white shadow-[0_16px_30px_-18px_rgba(47,103,246,0.95)]">
							N
						</span>
						<span>
							<span className="block font-display text-lg font-extrabold tracking-[-0.04em]">
								Numera
							</span>
							<span className="block text-sm text-slate-500">Matematika yang kepake</span>
						</span>
					</Link>
					<nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
						<a href="#manfaat" className="transition hover:text-slate-900">
							Manfaat
						</a>
						<a href="#cara-belajar" className="transition hover:text-slate-900">
							Cara Belajar
						</a>
						<a href="#preview" className="transition hover:text-slate-900">
							Latihan
						</a>
					</nav>
					<Button
						asChild
						className="rounded-full px-5 text-sm font-semibold shadow-[0_18px_30px_-18px_rgba(47,103,246,0.85)]"
					>
						<Link to="/latihan">Mulai Belajar</Link>
					</Button>
				</header>
				<div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
					<div className="relative">
						<div className="numera-kicker">Matematika praktikal buat orang dewasa</div>
						<h1 className="mt-5 max-w-xl font-display text-5xl font-extrabold leading-[0.94] tracking-[-0.06em] text-slate-950 sm:text-6xl">
							Lebih jago menilai angka yang muncul di kehidupan nyata.
						</h1>
						<p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
							Numera adalah web app belajar 5-7 menit per hari buat membangun cara berpikir
							matematika yang berguna di dunia nyata: baca peluang, kenali data yang menipu,
							pahami pertumbuhan, dan tetap tenang saat ketemu angka.
						</p>
						<div className="mt-8 flex flex-col gap-4 sm:flex-row">
							<Button
								asChild
								size="lg"
								className="h-12 rounded-full px-7 text-base font-semibold shadow-[0_22px_35px_-22px_rgba(47,103,246,0.9)]"
							>
								<Link to="/latihan">
									Mulai Belajar
									<ArrowRight className="size-4" />
								</Link>
							</Button>
							<Button
								asChild
								variant="secondary"
								size="lg"
								className="h-12 rounded-full border border-[#d8e4ff] bg-white/80 px-7 text-base font-semibold text-slate-700 shadow-none hover:bg-white"
							>
								<a href="#cara-belajar">Lihat Cara Kerja</a>
							</Button>
						</div>
						<div className="mt-8 grid gap-3 sm:grid-cols-3">
							{landingStats.map((item) => (
								<div key={item.label} className="numera-card px-4 py-4">
									<p className="text-sm font-medium text-slate-500">{item.label}</p>
									<p className="mt-1 font-display text-2xl font-bold tracking-[-0.04em] text-slate-950">
										{item.value}
									</p>
								</div>
							))}
						</div>
						<p className="mt-4 text-sm text-slate-500">
							Versi awal gratis, tanpa paywall. Dibuat buat latihan cepat yang terasa relevan.
						</p>
					</div>
					<div className="relative flex justify-center">
						<div className="absolute top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(47,103,246,0.22),_transparent_65%)] blur-3xl" />
						<div className="grid max-w-[40rem] items-start gap-5 sm:grid-cols-[0.9fr_0.8fr]">
							<PhoneFrame className="sm:translate-y-8">
								<MockupDashboard />
							</PhoneFrame>
							<div className="grid gap-5">
								<PhoneFrame className="sm:rotate-[3deg]">
									<MockupSteps scenario={activeScenario} />
								</PhoneFrame>
								<PhoneFrame className="-mt-4 sm:-ml-8 sm:rotate-[-5deg]">
									<MockupChallenge scenario={activeScenario} />
								</PhoneFrame>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="manfaat" className="numera-section pt-6 md:pt-10">
				<SectionHeading
					kicker="Contoh topik"
					title="Materi yang dekat sama keputusan harian"
					description="Beberapa sesi sangat praktikal, yang lain justru membongkar intuisi yang sering kita anggap bener tanpa sadar."
				/>
				<div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
					{useCases.map((item) => {
						const Icon = iconMap[item.icon];

						return (
							<article key={item.title} className="numera-card h-full px-5 py-5">
								<div className="flex size-12 items-center justify-center rounded-2xl bg-[#edf3ff] text-[#2f67f6]">
									<Icon className="size-5" />
								</div>
								<h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.04em] text-slate-950">
									{item.title}
								</h3>
								<p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
								<p className="mt-4 rounded-2xl bg-[#f6f9ff] px-4 py-3 text-sm font-medium leading-6 text-slate-500">
									{item.example}
								</p>
							</article>
						);
					})}
				</div>
			</section>

			<section id="cara-belajar" className="numera-section">
				<div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
					<div className="numera-card overflow-hidden px-6 py-6 md:px-8 md:py-8">
						<div className="numera-kicker">Cara belajar</div>
						<h2 className="mt-4 max-w-lg font-display text-4xl font-bold tracking-[-0.05em] text-slate-950">
							Tiap sesi selalu pakai format yang sama.
						</h2>
						<p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
							Setiap hari kamu lewati empat langkah singkat: pembuka yang bikin penasaran,
							ide inti, contoh nyata, lalu cek pemahaman buat mengunci insight-nya.
						</p>
						<div className="mt-8 space-y-4">
							{dailySessionBlocks.map((block, index) => (
								<div
									key={block.id}
									className="rounded-[24px] border border-[#dbe7ff] bg-[#f8fbff] px-5 py-5"
								>
									<div className="flex items-center gap-4">
										<span className="flex size-10 items-center justify-center rounded-full bg-white text-sm font-bold text-[#2f67f6] shadow-sm ring-1 ring-[#d6e2ff]">
											{index + 1}
										</span>
										<div>
											<h3 className="font-display text-xl font-bold tracking-[-0.04em] text-slate-950">
												{block.title}
											</h3>
											<p className="mt-2 text-sm font-semibold text-[#2f67f6]">{block.duration}</p>
											<p className="mt-2 text-sm leading-6 text-slate-600">{block.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="numera-card overflow-hidden px-6 py-6 md:px-8 md:py-8">
						<div className="flex flex-wrap items-center justify-between gap-3">
							<div>
								<div className="numera-kicker">Roadmap belajar</div>
								<h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-slate-950">
									Kurikulum 6 fase, dari fondasi sampai keputusan kompleks.
								</h2>
							</div>
							<div className="rounded-full bg-[#f5f8ff] px-4 py-2 text-sm font-semibold text-[#2f67f6] ring-1 ring-[#d7e3ff]">
								Spiral curriculum
							</div>
						</div>
						<div className="mt-8 grid gap-4">
							{curriculumPhases.map((phase) => (
								<div
									key={phase.phase}
									className={`rounded-[26px] border px-5 py-5 shadow-[0_20px_40px_-34px_rgba(47,103,246,0.55)] ${
										phase.phase === "Fase 1"
											? "border-[#b8ccff] bg-[linear-gradient(180deg,#f9fbff,#eef4ff)]"
											: "border-[#dbe7ff] bg-white"
									}`}
								>
									<div className="flex items-start justify-between gap-4">
										<div>
											<p className="text-sm font-semibold text-[#2f67f6]">{phase.phase}</p>
											<h3 className="mt-2 font-display text-xl font-bold tracking-[-0.04em] text-slate-950">
												{phase.title}
											</h3>
										</div>
										<span className="rounded-full bg-[#f5f8ff] px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-[#dbe7ff]">
											{phase.duration}
										</span>
									</div>
									<p className="mt-3 text-sm leading-6 text-slate-600">{phase.focus}</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="mt-6 grid gap-4 md:grid-cols-3">
					{phaseOneModules.map((module) => (
						<div key={module.title} className="numera-card h-full px-5 py-5">
							<p className="numera-kicker">Fase 1</p>
							<h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.04em] text-slate-950">
								{module.title}
							</h3>
							<p className="mt-3 text-sm leading-6 text-slate-600">{module.description}</p>
						</div>
					))}
				</div>
				<div className="mt-6 grid gap-4 md:grid-cols-3">
					{featureItems.map((item) => {
						const Icon = iconMap[item.icon];

						return (
							<div
								key={item.title}
								className="rounded-[26px] border border-[#dbe7ff] bg-white px-5 py-5 shadow-[0_20px_40px_-34px_rgba(47,103,246,0.45)]"
							>
								<div className="flex items-start gap-4">
									<div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#edf3ff] text-[#2f67f6]">
										<Icon className="size-5" />
									</div>
									<div>
										<h3 className="font-display text-xl font-bold tracking-[-0.04em] text-slate-950">
											{item.title}
										</h3>
										<p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<section id="preview" className="numera-section pt-0">
				<div className="numera-card overflow-hidden px-6 py-6 md:px-8 md:py-8">
					<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
						<div>
							<div className="numera-kicker">Contoh alur belajar</div>
							<h2 className="mt-4 max-w-xl font-display text-4xl font-bold tracking-[-0.05em] text-slate-950">
								Contoh sesi ini tetap singkat, tapi ritmenya sudah kerasa kayak pengalaman
								belajar yang utuh.
							</h2>
							<p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
								Kamu mulai dari pertanyaan yang bikin penasaran, masuk ke ide inti, lihat contoh
								nyata, lalu tutup sesi dengan satu pertanyaan singkat yang ngecek cara
								pikirmu.
							</p>
							<div className="mt-6 grid gap-3 sm:grid-cols-2">
								{dailySessionBlocks.map((block, index) => (
									<div
										key={block.id}
										className="rounded-[24px] bg-[#f5f8ff] px-4 py-4 ring-1 ring-[#d9e3ff]"
									>
										<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f67f6]">
											Langkah {index + 1} · {block.duration}
										</p>
										<p className="mt-2 font-semibold text-slate-900">{block.title}</p>
										<p className="mt-1 text-sm leading-6 text-slate-500">{block.description}</p>
									</div>
								))}
							</div>
						</div>
						<div className="rounded-[32px] bg-[linear-gradient(180deg,#2f67f6,#4c8dff)] p-6 text-white shadow-[0_32px_80px_-36px_rgba(47,103,246,0.95)]">
							<div className="flex items-center justify-between gap-3">
								<div>
									<p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
										Contoh sesi
									</p>
									<h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em]">
										{dailySession.topic}
									</h3>
								</div>
								<div className="rounded-full bg-white/14 px-4 py-2 text-sm font-semibold backdrop-blur">
									{dailySession.totalDuration}
								</div>
							</div>
							<p className="mt-5 text-base leading-7 text-white/82">{dailySession.phaseLabel}</p>
							<div className="mt-6 rounded-[24px] bg-white/10 px-5 py-5 backdrop-blur">
								<p className="text-sm text-white/70">Dari kurikulum</p>
								<p className="mt-2 text-lg font-semibold leading-7">{dailySession.moduleLabel}</p>
							</div>
							<div className="mt-4 rounded-[24px] bg-white/8 px-5 py-5 backdrop-blur">
								<p className="text-sm text-white/70">Yang bakal kamu rasain</p>
								<p className="mt-2 text-base leading-7 text-white/88">{dailySession.principle}</p>
							</div>
							<Button
								asChild
								size="lg"
								className="mt-6 h-12 w-full rounded-full bg-white text-[#2453d8] shadow-none hover:bg-white/92"
							>
								<Link to="/latihan">
									Lihat Contoh Sesi
									<ChevronRight className="size-4" />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="numera-section pb-16 pt-0 md:pb-20">
				<div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#17337e,#2f67f6_48%,#72a3ff)] px-6 py-8 text-white shadow-[0_36px_90px_-42px_rgba(23,51,126,0.92)] md:px-8 md:py-10">
					<div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
						<div>
							<div className="inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur">
								Gratis untuk eksplorasi awal
							</div>
							<h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-[-0.05em]">
								Mulai dari satu latihan singkat, lalu lihat sendiri apakah cara berpikirnya cocok buatmu.
							</h2>
							<p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
								Numera dibikin buat bantu kamu lebih tenang saat ketemu angka-angka kecil
								yang ternyata punya dampak besar.
							</p>
						</div>
						<Button
							asChild
							size="lg"
							className="h-12 rounded-full bg-white px-7 text-base font-semibold text-[#2453d8] shadow-none hover:bg-white/92"
						>
							<Link to="/latihan">
								Mulai Belajar
								<ArrowRight className="size-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}

function SectionHeading({
	kicker,
	title,
	description,
}: {
	kicker: string;
	title: string;
	description: string;
}) {
	return (
		<div className="max-w-3xl">
			<div className="numera-kicker">{kicker}</div>
			<h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-slate-950 sm:text-5xl">
				{title}
			</h2>
			<p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
		</div>
	);
}

function PhoneFrame({ className, children }: { className?: string; children: ReactNode }) {
	return (
		<div className={cn("numera-phone w-full max-w-[19rem]", className)}>
			<div className="numera-phone-screen">{children}</div>
		</div>
	);
}

function MockupDashboard() {
	return (
		<div>
			<div className="flex items-center justify-between text-xs font-semibold text-slate-500">
				<span>09:41</span>
				<div className="flex items-center gap-1">
					<span className="h-2 w-4 rounded-full border border-slate-300" />
					<span className="h-2 w-2 rounded-full bg-[#2f67f6]" />
				</div>
			</div>
			<div className="mt-5 rounded-[28px] bg-[linear-gradient(160deg,#2f67f6,#4f8fff)] px-5 py-5 text-white shadow-[0_20px_45px_-26px_rgba(47,103,246,0.88)]">
				<p className="text-sm font-medium text-white/80">Pilih sesi</p>
				<h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.05em]">
					Peluang & intuisi
				</h3>
				<div className="mt-4 grid grid-cols-3 gap-2">
					{["Peluang", "Data", "Growth"].map((label) => (
						<div
							key={label}
							className="rounded-2xl bg-white/12 px-3 py-3 text-center backdrop-blur"
						>
							<p className="text-xs font-medium text-white/70">{label}</p>
							<p className="mt-1 text-sm font-semibold text-white">Aktif</p>
						</div>
					))}
				</div>
			</div>
			<div className="mt-4 rounded-[26px] border border-[#dbe7ff] bg-[#f7faff] px-4 py-4">
				<p className="text-sm font-semibold text-slate-900">Contoh materi</p>
				<p className="mt-2 text-sm leading-6 text-slate-500">
					Apa hasil berikutnya jadi lebih mungkin cuma karena streak panjang?
				</p>
				<div className="mt-4 flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-[#dce6ff]">
					<div className="flex items-center gap-3">
						<div className="flex size-9 items-center justify-center rounded-full bg-[#fff2e8] text-[#ff8f3d]">
							<Dices className="size-4" />
						</div>
						<div>
							<p className="text-sm font-semibold text-slate-900">Koin tidak punya ingatan</p>
							<p className="text-xs text-slate-500">5-7 menit</p>
						</div>
					</div>
					<span className="rounded-full bg-[#edf3ff] px-3 py-1 text-xs font-semibold text-[#2f67f6]">
						Pilihan
					</span>
				</div>
			</div>
		</div>
	);
}

function MockupSteps({ scenario }: { scenario: (typeof practiceScenarios)[number] }) {
	return (
		<div>
			<div className="flex items-center justify-between text-xs font-semibold text-slate-500">
				<span>Ide utama</span>
				<span>{scenario.duration}</span>
			</div>
			<h3 className="mt-4 font-display text-[1.75rem] font-bold tracking-[-0.05em] text-slate-950">
				{scenario.title}
			</h3>
			<p className="mt-2 text-sm leading-6 text-slate-500">{scenario.question}</p>
			<div className="mt-5 space-y-3">
				{scenario.steps.slice(0, 2).map((step) => (
					<div
						key={step.index}
						className="rounded-[24px] bg-[#f5f8ff] px-4 py-4 ring-1 ring-[#dbe7ff]"
					>
						<div className="flex items-center gap-3">
							<span className="flex size-8 items-center justify-center rounded-full bg-white text-xs font-bold text-[#2f67f6] ring-1 ring-[#d6e2ff]">
								{step.index}
							</span>
							<p className="font-semibold text-slate-900">{step.title}</p>
						</div>
						<p className="mt-3 text-sm leading-6 text-slate-500">{step.result}</p>
					</div>
				))}
			</div>
			<div className="mt-5 rounded-[22px] bg-[linear-gradient(160deg,#2f67f6,#4a86ff)] px-4 py-4 text-white">
				<p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
					Intuisi kunci
				</p>
				<p className="mt-2 text-sm leading-6 text-white/88">{scenario.insight}</p>
			</div>
		</div>
	);
}

function MockupChallenge({ scenario }: { scenario: (typeof practiceScenarios)[number] }) {
	return (
		<div>
			<div className="flex items-center justify-between text-xs font-semibold text-slate-500">
				<span>Preview</span>
				<span>5-7 menit</span>
			</div>
			<h3 className="mt-4 font-display text-[1.55rem] font-bold tracking-[-0.05em] text-slate-950">
				Peluang sebenarnya
			</h3>
			<div className="mt-4 rounded-[24px] bg-[#fff5ec] px-4 py-4 ring-1 ring-[#ffe2c8]">
				<p className="text-sm font-medium text-[#bc6b1a]">Streak saat ini</p>
				<p className="mt-2 font-display text-3xl font-bold tracking-[-0.05em] text-slate-950">
					Angka x10
				</p>
			</div>
			<div className="mt-4 grid gap-3">
				<div className="rounded-[22px] bg-[#f5f8ff] px-4 py-4 ring-1 ring-[#dbe7ff]">
					<p className="text-sm font-medium text-slate-500">Intuisi umum</p>
					<p className="mt-2 text-lg font-bold text-slate-950">“Kepala sebentar lagi”</p>
				</div>
				<div className="rounded-[22px] bg-[linear-gradient(160deg,#2f67f6,#4b89ff)] px-4 py-4 text-white">
					<p className="text-sm font-medium text-white/75">Peluang sebenarnya</p>
					<p className="mt-2 font-display text-3xl font-bold tracking-[-0.05em]">
						{scenario.answer}
					</p>
				</div>
			</div>
		</div>
	);
}

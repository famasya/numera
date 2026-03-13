import { Link, createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
	ArrowLeft,
	ArrowRight,
	BookOpen,
	CheckCheck,
	CircleHelp,
	Clock3,
	Globe2,
	Lightbulb,
	Lock,
	Map,
	Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
	curriculumPhases,
	dailySession,
	dailySessionBlocks,
	phaseOneModules,
	practiceScenarios,
	type DailySessionBlock,
	type QuizOption,
	type SessionBlockId,
} from "~/lib/numera-content";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/latihan")({
	head: () => ({
		meta: [
			...seo({
				title: "Contoh Sesi Numera | Peluang yang Menjebak Intuisi",
				description:
					"Contoh sesi Numera tentang peluang yang menjebak intuisi, dalam alur belajar singkat 5-7 menit.",
				keywords: "numera, probabilitas, gambler's fallacy, mental math, peluang",
			}),
		],
	}),
	component: PracticePreviewPage,
});

const blockIconMap: Record<SessionBlockId, LucideIcon> = {
	hook: Sparkles,
	concept: Lightbulb,
	"real-world": Globe2,
	quiz: CircleHelp,
};

function PracticePreviewPage() {
	const [activeBlockIndex, setActiveBlockIndex] = useState(0);
	const [maxUnlocked, setMaxUnlocked] = useState(0);
	const [selectedOptionId, setSelectedOptionId] = useState<QuizOption["id"] | null>(null);

	const activeBlock = dailySessionBlocks[activeBlockIndex];
	const nextBlock = dailySessionBlocks[activeBlockIndex + 1];
	const nextSessions = practiceScenarios.filter((scenario) => scenario.status === "upcoming");
	const selectedOption =
		dailySession.quiz.options.find((option) => option.id === selectedOptionId) ?? null;
	const isLastBlock = activeBlockIndex === dailySessionBlocks.length - 1;
	const progressWidth = `${((activeBlockIndex + 1) / dailySessionBlocks.length) * 100}%`;

	return (
		<main className="numera-page">
			<div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(64,120,255,0.28),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(255,164,86,0.16),_transparent_32%)]" />
			<section className="numera-section pb-16 pt-8 md:pt-10">
				<div className="mx-auto flex max-w-6xl flex-col gap-6">
					<header className="numera-card flex flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-6">
						<div className="flex items-center gap-4">
							<Link
								to="/"
								aria-label="Kembali ke beranda"
								className="flex size-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm ring-1 ring-[#dbe7ff] transition hover:text-[#2f67f6]"
							>
								<ArrowLeft className="size-5" />
							</Link>
							<div>
								<p className="text-sm font-medium text-slate-500">Contoh materi</p>
								<h1 className="font-display text-3xl font-bold tracking-[-0.05em] text-slate-950">
									Contoh sesi Numera
								</h1>
							</div>
						</div>
						<div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
							<div className="rounded-full bg-[#edf3ff] px-4 py-2 text-[#2f67f6] ring-1 ring-[#dbe7ff]">
								{dailySession.totalDuration}
							</div>
							<div className="rounded-full bg-white px-4 py-2 ring-1 ring-[#dbe7ff]">
								Gratis untuk dicoba
							</div>
						</div>
					</header>

					<div className="grid gap-6 xl:grid-cols-[minmax(20rem,0.92fr)_minmax(0,1.38fr)]">
						<aside className="space-y-6">
							<section className="numera-card overflow-hidden px-5 py-5">
								<div className="flex items-center justify-between gap-4">
									<div>
										<p className="numera-kicker">Alur belajar</p>
										<h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-slate-950">
											Pembuka → Ide Inti → Contoh Nyata → Cek Pemahaman
										</h2>
									</div>
									<div className="flex size-12 items-center justify-center rounded-2xl bg-[#edf3ff] text-[#2f67f6]">
										<Clock3 className="size-5" />
									</div>
								</div>
								<div className="mt-6 space-y-3">
									{dailySessionBlocks.map((block, index) => {
										const Icon = blockIconMap[block.id];
										const isActive = index === activeBlockIndex;
										const isUnlocked = index <= maxUnlocked;

										return (
											<button
												type="button"
												key={block.id}
												onClick={() => {
													if (isUnlocked) {
														setActiveBlockIndex(index);
													}
												}}
												disabled={!isUnlocked}
												className={`flex w-full items-start gap-4 rounded-[24px] border px-4 py-4 text-left transition ${
													isActive
														? "border-[#b8ccff] bg-[linear-gradient(180deg,#f9fbff,#eef4ff)] shadow-[0_22px_40px_-34px_rgba(47,103,246,0.7)]"
														: "border-[#dbe7ff] bg-white"
												} ${!isUnlocked ? "cursor-not-allowed opacity-55" : ""}`}
											>
												<div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#edf3ff] text-[#2f67f6]">
													<Icon className="size-5" />
												</div>
												<div className="min-w-0">
													<div className="flex flex-wrap items-center gap-2">
														<p className="font-display text-xl font-bold tracking-[-0.04em] text-slate-950">
															{block.title}
														</p>
														<span className="rounded-full bg-[#f5f8ff] px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-[#dbe7ff]">
															{block.duration}
														</span>
													</div>
													<p className="mt-2 text-sm leading-6 text-slate-600">
														{block.description}
													</p>
												</div>
											</button>
										);
									})}
								</div>
							</section>

							<section className="numera-card overflow-hidden px-5 py-5">
								<div className="flex items-center justify-between gap-4">
									<div>
										<p className="numera-kicker">Kurikulum</p>
										<h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.05em] text-slate-950">
											Jalur belajar utama dimulai dari Fase 1.
										</h2>
									</div>
									<div className="flex size-12 items-center justify-center rounded-2xl bg-[#edf3ff] text-[#2f67f6]">
										<Map className="size-5" />
									</div>
								</div>
								<div className="mt-6 space-y-3">
									{curriculumPhases.map((phase) => (
										<div
											key={phase.phase}
											className={`rounded-[24px] border px-4 py-4 ${
												phase.phase === "Fase 1"
													? "border-[#b8ccff] bg-[linear-gradient(180deg,#f9fbff,#eef4ff)]"
													: "border-[#dbe7ff] bg-white"
											}`}
										>
											<div className="flex items-center justify-between gap-3">
												<p className="font-display text-lg font-bold tracking-[-0.04em] text-slate-950">
													{phase.phase} · {phase.title}
												</p>
												<span className="rounded-full bg-[#f5f8ff] px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-[#dbe7ff]">
													{phase.duration}
												</span>
											</div>
											<p className="mt-2 text-sm leading-6 text-slate-600">{phase.focus}</p>
										</div>
									))}
								</div>
								<div className="mt-6 rounded-[28px] bg-[#f7faff] px-5 py-5 ring-1 ring-[#dbe7ff]">
									<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f67f6]">
										Modul fase 1
									</p>
									<div className="mt-4 space-y-3">
										{phaseOneModules.map((module) => (
											<div
												key={module.title}
												className="rounded-[22px] bg-white px-4 py-4 ring-1 ring-[#dbe7ff]"
											>
												<p className="font-semibold text-slate-950">{module.title}</p>
												<p className="mt-2 text-sm leading-6 text-slate-600">
													{module.description}
												</p>
											</div>
										))}
									</div>
								</div>
							</section>
						</aside>

						<section className="numera-card overflow-hidden px-5 py-5 md:px-6 md:py-6">
							<div className="flex flex-col gap-5 border-b border-[#dbe7ff] pb-6">
								<div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
									<div>
										<p className="numera-kicker">Contoh sesi</p>
										<h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.05em] text-slate-950">
											{dailySession.topic}
										</h2>
										<p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
											{dailySession.phaseLabel} · {dailySession.moduleLabel}
										</p>
										<p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
											{dailySession.principle}
										</p>
									</div>
									<div className="rounded-[28px] bg-[linear-gradient(180deg,#2f67f6,#4a88ff)] px-5 py-4 text-white shadow-[0_24px_44px_-30px_rgba(47,103,246,0.92)]">
										<p className="text-sm font-medium text-white/70">{dailySession.dayLabel}</p>
										<p className="mt-2 font-display text-2xl font-bold tracking-[-0.04em]">
											{activeBlock.title}
										</p>
										<p className="mt-2 text-sm leading-6 text-white/82">{activeBlock.duration}</p>
									</div>
								</div>
								<div>
									<div className="mb-3 flex items-center justify-between gap-3 text-sm font-medium text-slate-500">
										<span>Progress belajar</span>
										<span>
											{activeBlockIndex + 1}/{dailySessionBlocks.length} langkah
										</span>
									</div>
									<div className="h-3 rounded-full bg-[#edf3ff]">
										<div
											className="h-full rounded-full bg-[linear-gradient(90deg,#2f67f6,#6da3ff)] transition-all"
											style={{ width: progressWidth }}
										/>
									</div>
								</div>
								<div className="grid gap-3 md:grid-cols-4">
									{dailySessionBlocks.map((block, index) => (
										<BlockPill
											key={block.id}
											block={block}
											index={index}
											isActive={index === activeBlockIndex}
											isUnlocked={index <= maxUnlocked}
											onSelect={() => {
												if (index <= maxUnlocked) {
													setActiveBlockIndex(index);
												}
											}}
										/>
									))}
								</div>
							</div>

							<div className="mt-6">
								{renderBlockContent(
									activeBlock.id,
									selectedOption,
									selectedOptionId,
									setSelectedOptionId,
								)}
							</div>

							<div className="mt-6 flex flex-col gap-3 border-t border-[#dbe7ff] pt-6 sm:flex-row sm:items-center sm:justify-between">
								<div className="flex flex-col gap-3 sm:flex-row">
									<Button
										type="button"
										size="lg"
										variant="secondary"
										disabled={activeBlockIndex === 0}
										onClick={() => setActiveBlockIndex((index) => Math.max(index - 1, 0))}
										className="h-12 rounded-full border border-[#d8e4ff] bg-white px-6 text-base font-semibold text-slate-700 shadow-none hover:bg-white"
									>
										Kembali
									</Button>
									<Button
										type="button"
										size="lg"
										variant="secondary"
										onClick={() => {
											setActiveBlockIndex(0);
											setMaxUnlocked(0);
											setSelectedOptionId(null);
										}}
										className="h-12 rounded-full border border-[#d8e4ff] bg-white px-6 text-base font-semibold text-slate-700 shadow-none hover:bg-white"
									>
										Ulangi materi
									</Button>
								</div>
								{isLastBlock ? (
									<Button
										type="button"
										size="lg"
										disabled={!selectedOption}
										onClick={() => {
											setActiveBlockIndex(0);
											setMaxUnlocked(0);
											setSelectedOptionId(null);
										}}
										className="h-12 rounded-full px-6 text-base font-semibold shadow-[0_22px_34px_-22px_rgba(47,103,246,0.88)]"
									>
										{selectedOption ? "Mulai lagi" : "Pilih jawaban dulu"}
									</Button>
								) : (
									<Button
										type="button"
										size="lg"
										onClick={() => {
											const nextIndex = Math.min(
												activeBlockIndex + 1,
												dailySessionBlocks.length - 1,
											);
											setActiveBlockIndex(nextIndex);
											setMaxUnlocked((current) => Math.max(current, nextIndex));
										}}
										className="h-12 rounded-full px-6 text-base font-semibold shadow-[0_22px_34px_-22px_rgba(47,103,246,0.88)]"
									>
										Lanjut ke {nextBlock?.title}
										<ArrowRight className="size-4" />
									</Button>
								)}
							</div>

							<div className="mt-8 rounded-[30px] bg-[#fff5ec] px-5 py-5 ring-1 ring-[#ffe2c8]">
								<div className="flex items-center justify-between gap-3">
									<div>
										<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bc6b1a]">
											Materi berikutnya
										</p>
										<p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">
											Setelah sesi peluang ini, contoh materi lain bisa membawa kamu ke data yang
											menipu, pertumbuhan eksponensial, atau kembali ke fondasi intuitif.
										</p>
									</div>
									<div className="hidden size-12 items-center justify-center rounded-2xl bg-white text-[#bc6b1a] shadow-sm ring-1 ring-[#ffd8b4] md:flex">
										<BookOpen className="size-5" />
									</div>
								</div>
								<div className="mt-5 grid gap-4 md:grid-cols-2">
									{nextSessions.map((scenario) => (
										<div
											key={scenario.slug}
											className="rounded-[24px] bg-white px-4 py-4 ring-1 ring-[#ffd8b4]"
										>
											<div className="flex items-start justify-between gap-3">
												<div>
													<p className="font-display text-xl font-bold tracking-[-0.04em] text-slate-950">
														{scenario.title}
													</p>
													<p className="mt-2 text-sm leading-6 text-slate-600">
														{scenario.context}
													</p>
												</div>
												<div className="flex items-center gap-2 rounded-full bg-[#fff7ef] px-3 py-2 text-xs font-semibold text-[#bc6b1a] ring-1 ring-[#ffd8b4]">
													<Lock className="size-3.5" />
													Nanti
												</div>
											</div>
										</div>
									))}
								</div>
								<Button
									asChild
									size="lg"
									variant="secondary"
									className="mt-5 h-12 rounded-full border border-[#ffd8b4] bg-white px-6 text-base font-semibold text-[#bc6b1a] shadow-none hover:bg-white"
								>
									<Link to="/">Kembali ke beranda</Link>
								</Button>
							</div>
						</section>
					</div>
				</div>
			</section>
		</main>
	);
}

function BlockPill({
	block,
	index,
	isActive,
	isUnlocked,
	onSelect,
}: {
	block: DailySessionBlock;
	index: number;
	isActive: boolean;
	isUnlocked: boolean;
	onSelect: () => void;
}) {
	return (
		<button
			type="button"
			onClick={onSelect}
			disabled={!isUnlocked}
			className={`rounded-[22px] border px-4 py-4 text-left transition ${
				isActive
					? "border-[#b8ccff] bg-[linear-gradient(180deg,#f9fbff,#eef4ff)] shadow-[0_20px_38px_-32px_rgba(47,103,246,0.7)]"
					: "border-[#dbe7ff] bg-white"
			} ${!isUnlocked ? "cursor-not-allowed opacity-50" : ""}`}
		>
			<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f67f6]">
				Langkah {index + 1}
			</p>
			<p className="mt-2 font-display text-lg font-bold tracking-[-0.04em] text-slate-950">
				{block.title}
			</p>
			<p className="mt-1 text-sm text-slate-500">{block.duration}</p>
		</button>
	);
}

function renderBlockContent(
	blockId: SessionBlockId,
	selectedOption: QuizOption | null,
	selectedOptionId: QuizOption["id"] | null,
	setSelectedOptionId: (id: QuizOption["id"]) => void,
) {
	if (blockId === "hook") {
		return (
			<div className="space-y-6">
				<div className="rounded-[32px] bg-[linear-gradient(160deg,#2f67f6,#4c8dff)] px-6 py-6 text-white shadow-[0_28px_72px_-38px_rgba(47,103,246,0.9)]">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
						{dailySession.dayLabel}
					</p>
					<h3 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em]">
						Pembuka: ada satu intuisi yang kerasa bener, tapi belum tentu akurat
					</h3>
					<div className="mt-6 space-y-3 text-base leading-7 text-white/86">
						{dailySession.hook.lines.map((line) => (
							<p key={line}>{line}</p>
						))}
					</div>
				</div>
				<div className="rounded-[30px] bg-[#f5f8ff] px-5 py-5 ring-1 ring-[#dbe7ff]">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f67f6]">
						Pertanyaan
					</p>
					<p className="mt-3 text-lg font-semibold leading-8 text-slate-900">
						{dailySession.hook.question}
					</p>
				</div>
			</div>
		);
	}

	if (blockId === "concept") {
		return (
			<div className="space-y-6">
				<div className="rounded-[30px] bg-[#f5f8ff] px-5 py-5 ring-1 ring-[#dbe7ff]">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f67f6]">
						Ide inti
					</p>
					<h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-slate-950">
						{dailySession.concept.title}
					</h3>
					<div className="mt-5 space-y-3 text-base leading-7 text-slate-700">
						{dailySession.concept.description.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
				</div>
				<div className="grid gap-4 md:grid-cols-3">
					{dailySession.concept.steps.map((step) => (
						<div
							key={step.index}
							className="rounded-[28px] border border-[#dbe7ff] bg-white px-5 py-5 shadow-[0_24px_48px_-38px_rgba(47,103,246,0.75)]"
						>
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f67f6]">
								Langkah {step.index}
							</p>
							<h4 className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-slate-950">
								{step.title}
							</h4>
							<p className="mt-3 text-sm leading-6 text-slate-600">{step.explanation}</p>
							<p className="mt-4 rounded-[20px] bg-[#f7faff] px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-[#dbe7ff]">
								{step.result}
							</p>
						</div>
					))}
				</div>
				<div className="rounded-[30px] bg-[#fff5ec] px-5 py-5 ring-1 ring-[#ffe2c8]">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bc6b1a]">
						Inti yang perlu diingat
					</p>
					<p className="mt-3 text-base leading-7 text-slate-700">{dailySession.concept.takeaway}</p>
				</div>
			</div>
		);
	}

	if (blockId === "real-world") {
		return (
			<div className="space-y-6">
				<div className="rounded-[30px] bg-[#f5f8ff] px-5 py-5 ring-1 ring-[#dbe7ff]">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f67f6]">
						Contoh nyata
					</p>
					<h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-slate-950">
						Intuisi yang salah ini muncul jauh di luar eksperimen koin.
					</h3>
					<p className="mt-4 text-base leading-7 text-slate-700">
						Kalau kita nggak sadar lagi berurusan dengan kejadian independen, otak gampang banget
						baca pola palsu dan ngerasa sebuah hasil sudah “waktunya datang”.
					</p>
				</div>
				<div className="grid gap-4 md:grid-cols-3">
					{dailySession.realWorld.map((example) => (
						<div
							key={example.context}
							className="rounded-[28px] border border-[#dbe7ff] bg-white px-5 py-5 shadow-[0_24px_48px_-38px_rgba(47,103,246,0.7)]"
						>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f67f6]">
								{example.context}
							</p>
							<p className="mt-4 text-base leading-7 text-slate-700">{example.description}</p>
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="rounded-[30px] bg-[#f5f8ff] px-5 py-5 ring-1 ring-[#dbe7ff]">
				<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f67f6]">
					Cek pemahaman
				</p>
				<h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-slate-950">
					Satu pertanyaan singkat buat ngecek intuisi
				</h3>
				<p className="mt-4 text-base leading-7 text-slate-700">{dailySession.quiz.prompt}</p>
			</div>
			<div className="grid gap-3">
				{dailySession.quiz.options.map((option) => {
					const isSelected = option.id === selectedOptionId;
					const isCorrectSelection = isSelected && option.isCorrect;
					const isWrongSelection = isSelected && !option.isCorrect;

					return (
						<button
							type="button"
							key={option.id}
							onClick={() => setSelectedOptionId(option.id)}
							className={`rounded-[24px] border px-5 py-5 text-left transition ${
								isCorrectSelection
									? "border-emerald-200 bg-emerald-50"
									: isWrongSelection
										? "border-rose-200 bg-rose-50"
										: "border-[#dbe7ff] bg-white"
							}`}
						>
							<div className="flex items-center gap-4">
								<span className="flex size-10 items-center justify-center rounded-full bg-[#edf3ff] text-sm font-bold text-[#2f67f6]">
									{option.id}
								</span>
								<p className="text-base font-semibold text-slate-900">{option.text}</p>
							</div>
						</button>
					);
				})}
			</div>
			{selectedOption ? (
				<div
					className={`rounded-[30px] px-5 py-5 ring-1 ${
						selectedOption.isCorrect
							? "bg-emerald-50 text-emerald-950 ring-emerald-200"
							: "bg-rose-50 text-rose-950 ring-rose-200"
					}`}
				>
					<div className="flex items-start gap-4">
						<div
							className={`mt-1 flex size-11 shrink-0 items-center justify-center rounded-2xl ${
								selectedOption.isCorrect ? "bg-emerald-100" : "bg-rose-100"
							}`}
						>
							<CheckCheck className="size-5" />
						</div>
						<div>
							<p className="font-display text-2xl font-bold tracking-[-0.04em]">
								{dailySession.quiz.feedbackTitle}
							</p>
							<p className="mt-3 text-base leading-7">{selectedOption.rationale}</p>
							<p className="mt-3 text-base leading-7">{dailySession.quiz.explanation}</p>
							<p className="mt-3 text-sm leading-6 text-slate-700">
								{dailySession.quiz.commonMistake}
							</p>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}

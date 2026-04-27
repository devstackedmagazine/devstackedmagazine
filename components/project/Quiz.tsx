"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, Home } from "lucide-react";
import Button from "@/components/ui/Button";
import { Progress } from "@/components/ui/progress";
import sections from "@/components/project/questions.json";
import { useRouter } from "next/navigation";

type QuestionType = "text" | "email" | "textarea" | "single-choice";

type Question = {
	id: string;
	question: string;
	type: QuestionType;
	placeholder?: string;
	options?: string[];
	optional?: boolean;
	dependsOn?: {
		id: string;
		value: string;
	};
};

type QuestionSection = {
	id: string;
	section: string;
	description: string;
	questions: Question[];
};

type Answers = Record<string, string>;

const quizSections = sections as QuestionSection[];

export default function Quiz() {
	const [sectionIndex, setSectionIndex] = useState(0);
	const [answers, setAnswers] = useState<Answers>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState<{
		type: "success" | "error";
		text: string;
	} | null>(null);
	const router = useRouter();

	const currentSection = quizSections[sectionIndex];
	const totalSections = quizSections.length;
	const progressValue = ((sectionIndex + 1) / totalSections) * 100;
	const isFirstSection = sectionIndex === 0;
	const isLastSection = sectionIndex === totalSections - 1;

	const canContinue = useMemo(
		() =>
			currentSection.questions.every((question) => {
				if (
					question.dependsOn &&
					answers[question.dependsOn.id] !== question.dependsOn.value
				) {
					return true;
				}

				if (question.optional) {
					return true;
				}

				return Boolean(answers[question.id]?.trim());
			}),
		[answers, currentSection.questions]
	);

	function updateAnswer(questionId: string, value: string) {
		setAnswers((currentAnswers) => ({
			...currentAnswers,
			[questionId]: value,
		}));

		if (submitMessage) {
			setSubmitMessage(null);
		}
	}

	function goBack() {
		if (!isFirstSection) {
			setSectionIndex((currentIndex) => currentIndex - 1);
		}
	}

	function goForward() {
		if (!isLastSection) {
			setSectionIndex((currentIndex) => currentIndex + 1);
		}
	}

	async function submitProject() {
		if (!canContinue) {
			setSubmitMessage({
				type: "error",
				text: "Please complete the required answers before submitting.",
			});
			return;
		}

		setIsSubmitting(true);
		setSubmitMessage(null);

		try {
			setSubmitMessage({
				type: "success",
				text: "Project intake completed.",
			});
			setAnswers({});
			setSectionIndex(0);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className="mx-auto flex min-h-dvh w-full max-w-5xl self-center flex-col">
			<div className="sticky top-0 z-20 pt-4 sm:pt-6">
				<div className="flex items-center gap-3">
					<Button
						type="button"
						variant="ghost"
						size="sm"
						onClick={goBack}
						disabled={isFirstSection}
						className="h-10 w-10 rounded-full border border-white/10 px-0"
					>
						<ArrowLeftIcon className="h-4 w-4" />
					</Button>
					<Button
						type="button"
						variant="ghost"
						size="sm"
						onClick={() => router.push("/")}
						className="h-10 w-10 rounded-full border border-white/10 px-0"
					>
						<Home className="h-4 w-4" />
					</Button>
					<div className="flex-1">
						<div className="mb-1.5 flex items-center justify-between gap-4">
							<span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-active">
								Section {sectionIndex + 1} of {totalSections}
							</span>
							<span className="text-xs text-white/60 sm:text-sm">
								{currentSection.section}
							</span>
						</div>
						<Progress
							value={progressValue}
							className="h-1.5 bg-white/10 **:data-[slot=progress-indicator]:bg-red-active"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-1 flex-col justify-center py-6 sm:py-8">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentSection.id}
						className="w-full"
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -14 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
					>
						<div className="mx-auto w-full max-w-3xl">
							<div className="mb-5">
								<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-active">
									Project Intake
								</p>
								<h1 className="mt-2 text-2xl font-semibold text-white sm:text-[1.9rem]">
									{currentSection.section}
								</h1>
								<p className="mt-2 max-w-2xl text-sm leading-6 text-white/68">
									{currentSection.description}
								</p>
							</div>

							<div className="flex flex-col gap-4">
								{currentSection.questions.map((question) => {
									const isVisible =
										!question.dependsOn ||
										answers[question.dependsOn.id] === question.dependsOn.value;

									if (!isVisible) {
										return null;
									}

									return (
									<div
										key={question.id}
										className="w-full"
									>
										<label
											htmlFor={question.id}
											className="mb-2 block text-sm font-medium text-white"
										>
											{question.question}
											{question.optional ? (
												<span className="ml-2 text-xs font-normal text-white/45">
													Optional
												</span>
											) : null}
										</label>

										{(question.type === "text" || question.type === "email") && (
											<input
												id={question.id}
												type={question.type}
												value={answers[question.id] ?? ""}
												onChange={(event) => updateAnswer(question.id, event.target.value)}
												placeholder={question.placeholder}
												className="h-10 w-full rounded-lg border border-white/12 bg-white/6 px-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-red-active"
											/>
										)}

										{question.type === "textarea" && (
											<textarea
												id={question.id}
												value={answers[question.id] ?? ""}
												onChange={(event) => updateAnswer(question.id, event.target.value)}
												placeholder={question.placeholder}
												rows={4}
												className="w-full rounded-lg border border-white/12 bg-white/6 px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-red-active"
											/>
										)}

										{question.type === "single-choice" && question.options && (
											<div className="grid gap-2 sm:grid-cols-2">
												{question.options.map((option) => {
													const isSelected = answers[question.id] === option;

													return (
														<button
															key={option}
															type="button"
															onClick={() => updateAnswer(question.id, option)}
															className={`rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${
																isSelected
																	? "border-red-active bg-red-active/10 text-white"
																	: "border-white/12 bg-white/6 text-white/72 hover:border-white/22 hover:bg-white/8"
															}`}
														>
															{option}
														</button>
													);
												})}
											</div>
										)}
									</div>
									);
								})}
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			<div className="sticky bottom-0 z-20 pb-4 pt-3 sm:pb-6">
				<div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
					<p
						aria-live="polite"
						className={`text-xs sm:text-sm ${
							submitMessage
								? submitMessage.type === "success"
									? "text-green-300"
									: "text-red-300"
								: "text-white/55"
						}`}
					>
						{submitMessage
							? submitMessage.text
							: isLastSection
								? "Finish this section to complete the intake."
								: "Complete this section to move to the next one."}
					</p>

					<div className="flex flex-wrap gap-2">
						{!isFirstSection && (
							<Button type="button" variant="ghost" size="sm" onClick={goBack}>
								Back
							</Button>
						)}

						<Button
							type="button"
							variant="primary"
							size="sm"
							onClick={isLastSection ? submitProject : goForward}
							disabled={!canContinue || isSubmitting}
							isLoading={isSubmitting}
							rightIcon={
								!isLastSection && !isSubmitting ? (
									<ArrowRightIcon className="h-4 w-4" />
								) : undefined
							}
						>
							{isLastSection ? "Complete Intake" : "Next Section"}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

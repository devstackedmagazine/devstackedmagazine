"use client";

import Quiz from "@/components/project/Quiz";

function Project() {
	return (
		<section className="relative -mx-[20px] min-h-screen overflow-visible bg-background px-[20px] sm:-mx-[50px] sm:px-[50px] lg:-mx-[100px] lg:px-[100px]">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,14,26,0.12),transparent_42%)]"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(199,14,26,0.08),transparent_40%)]"
			/>
			<div className="pointer-events-none absolute -left-16 top-6 h-80 w-80 rounded-full bg-red-active/28 blur-[130px]" />
			<div className="pointer-events-none absolute left-[30%] top-[14%] h-64 w-64 rounded-full bg-red-active/18 blur-[115px]" />
			<div className="pointer-events-none absolute right-[4%] top-[16%] h-72 w-[300px] rounded-full bg-red-active/22 blur-[125px]" />
			<div className="pointer-events-none absolute right-[14%] top-[52%] h-64 w-64 rounded-full bg-red-active/18 blur-[125px]" />
			<div className="pointer-events-none absolute left-[8%] bottom-[10%] h-72 w-72 rounded-full bg-red-active/18 blur-[130px]" />
			<div className="pointer-events-none absolute right-[-4%] bottom-[-2%] h-80 w-80 rounded-full bg-red-active/24 blur-[140px]" />
			<div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-stretch justify-start py-0">
				<Quiz />
			</div>
		</section>
	);
}

export default Project;

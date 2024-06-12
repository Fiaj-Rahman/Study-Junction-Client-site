import React from 'react';

const Faqs = () => {
    return (
        <div>
            <section className="bg-gray-800 text-gray-100 rounded-t-lg">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-5xl text-center mt-5 mb-5 font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		

		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Study Junction about?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">"Study Junction" is a dedicated platform for assignment-focused group study. It enables users to access, submit, and create assignments collaboratively. Whether you're seeking to review, submit, or develop assignments, Study Junction offers a centralized hub for academic engagement and collaboration. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How can I use Study Junction to improve my study habits?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Study Junction is an assignment-focused website where users can access, submit, and create assignments for group study. It promotes collaborative learning, facilitates assignment submission and feedback, encourages structured study habits, and enables resource sharing among peers, ultimately enhancing academic performance and fostering a supportive learning community. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Do I need to create an account to access the resources on Study Junction?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Yes, to access the resources on Study Junction, users typically need to create an account. This account allows them to submit assignments, access study materials, participate in group discussions, and track their progress. </p>
			</details>
            <details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Can I submit my own assignments or study materials to share with others on the platform?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Yes, Study Junction allows users to submit their own assignments and study materials to share with others on the platform. This fosters collaboration and knowledge sharing among users, enriching the learning experience for everyone involved. </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Faqs;
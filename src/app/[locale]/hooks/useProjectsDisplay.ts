import { ProjectElement } from "@/lib/contentful/types";
import { useState, useEffect, useMemo } from "react";

export default function useProjectsDisplay(projects: ProjectElement[]) {
	const [displayAllProjects, setDisplayAllProjects] = useState(false);

	function handleLoadMore() {
		setDisplayAllProjects(true);
		sessionStorage.setItem("displayAllProjects", JSON.stringify(true));
	}

	const numOfProjects = useMemo(
		() => (displayAllProjects ? projects.length : 8),
		[displayAllProjects, projects.length]
	);

	useEffect(() => {
		const storedDisplayAllProjects =
			sessionStorage.getItem("displayAllProjects");
		if (storedDisplayAllProjects) {
			setDisplayAllProjects(JSON.parse(storedDisplayAllProjects));
		}
	}, []);

	return {
		displayAllProjects,
		numOfProjects,
		handleLoadMore,
	};
}

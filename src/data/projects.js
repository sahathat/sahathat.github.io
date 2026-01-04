// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		title: 'PTTLNG.com',
		category: ['Web Application','Dashboard', 'Booking System', 'Recruitment system'],
		img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/Icon/PTTLNG.png?updatedAt=1767521955845',
	},
	{
		title: 'TOA Multi - Track Player',
		category: ['Window Application', 'Multimedia Player'],
		img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/Icon/TOA.png?updatedAt=1767521955331',
	},
	{
		title: 'PAT - Report Pro',
		category: ['Window Application','Monitoring mesurements'],
		img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/Icon/PAT.png?updatedAt=1767521955813',
	},
	{
		title: 'Porpinklao.com',
		category: ['Web Application','Booking System'],
		img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/Icon/Porpinklao.png?updatedAt=1767520443516',
	},
	{
		title: 'Ilearning (GoFSi)',
		category: ['Web Application','Course Online'],
		img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/Icon/GoSFi.png?updatedAt=1767521834463',
	},
	{
		title: 'Gofive Projects',
		category: ['Web Application','Window application','Machine Learning','Dashboard'],
		img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/Gofive/7-Gofive-1.png?updatedAt=1767511599746',
	},
	{
		title: 'Leafy',
		category: ['Web Application','Machine Learning'],
		img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/1/1-Leafy.png?updatedAt=1767511791703',
	},
	{
		title: 'Moral IT Help Desk',
		category: ['Web Application','Dashboard'],
		img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/2/2-ITHelpDesk.png?updatedAt=1767511821700',
	},
	{
		title: 'Google Certificate Salifort Motors Company - Why employee left?',
		category: ['Explorational Data Analysis','Dashboard',"Machine Learning"],
		img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/3/3-SalifortMotors.png?updatedAt=1767511856690',
	},
	{
		title: 'OASIP (Online Appointment Scheduling System For Integrated Project Clinics)',
		category: ['Web Application'],
		img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/4/4-OASIP.png?updatedAt=1767511880469',
	},
	{
		title: 'CSGO winner classification',
		category: ['Machine Learning'],
		img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/5/ML.png?updatedAt=1767511967411',
	},
	{
		title: "Submarine",
		category: ["Web Application","Game Development"],
		img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/6/6-helloworld.png?updatedAt=1767511989561'
	}
];

function addIncrementingIds(projectArray) {
	return projectArray.map((project, index) => ({
		...project,
		id: index + 1, // Add an `id` property starting from 1
	}));
}
  
const updatedProjects = addIncrementingIds(projects);

export default updatedProjects;

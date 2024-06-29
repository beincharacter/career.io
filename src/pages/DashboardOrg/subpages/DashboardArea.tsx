import { JobCard } from "../components/JobCard";
import { StatCard } from "../components/StatCard";
import { Statics } from "../components/Statics";

export const DashboardArea: React.FC = () => (
    <>

        <section className="flex gap-5 justify-between p-8 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
                <h2 className="text-2xl font-semibold leading-7 text-slate-800 max-md:max-w-full">Good morning, Maria</h2>
                <p className="mt-2 text-base font-medium leading-6 text-slate-500 max-md:max-w-full">Here is your job listings statistic report from July 19 - July 25.</p>
            </div>
            <div className="flex gap-4 justify-between px-4 py-3 my-auto text-base leading-6 bg-white border border-solid border-zinc-200 text-slate-800">
                <span>Jul 19 - Jul 25</span>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3335a5ece0240df147c783882102db24784a37951f3b87594d75dd5251923ce?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
            </div>
        </section>
        <section className="px-px mx-8 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <StatCard count={76} title="New candidates to review" bgColor="bg-indigo-600" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/941d13a990d4cbc86f7c8c3adcc355f291a87fd4eb447bb3f9d6e79546c42e33?apiKey=9930d1395d354fadb15c776dbd7b25f4&" />
                <StatCard count={3} title="Schedule for today" bgColor="bg-emerald-300" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7c2e7340f17e7a375d8385e249f25e61e76dbf3cfeafcd0340f750020e882f84?apiKey=9930d1395d354fadb15c776dbd7b25f4&" />
                <StatCard count={24} title="Messages received" bgColor="bg-sky-400" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6aae5462035bfc174202a6201231087516db20017747b2e372ec0e688c5d09ef?apiKey=9930d1395d354fadb15c776dbd7b25f4&" />
            </div>
        </section>
        <section className="mx-8 mt-6 max-md:mr-2.5 max-md:max-w-full">
            <Statics />
        </section>
        <section className="flex flex-col mx-8 mt-6 border border-solid border-zinc-200 max-md:mr-2.5 max-md:max-w-full">
            <header className="flex gap-5 justify-between p-6 w-full font-semibold bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <h2 className="text-xl leading-6 text-slate-800">Job Updates</h2>
                <button className="flex gap-2 text-base leading-6 text-indigo-600">
                    <span>View All</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf6c44027fa215379c9325061228bf4e23d57d4188c20d5c323c141a2e7cb9dc?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 self-start w-6 aspect-square" />
                </button>
            </header>
            <div className="p-6 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <JobCard
                        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/a6298d2c3128a26ad9f48ff16af5ae7ed737ec7ea0571b1695c6da2925ddf5e7?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                        jobType="Full-Time"
                        title="Social Media Assistant"
                        company="Nomad"
                        location="Paris, France"
                        tags={["Marketing", "Design"]}
                        applicants={5}
                        capacity={10}
                    />
                    <JobCard
                        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/c65cb95144e38180fdb5595327425ace9a18bcea174fe9ef42436b43634e6ad7?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                        jobType="Full-Time"
                        title="Brand Designer"
                        company="Nomad"
                        location="Paris, France"
                        tags={["Business", "Design"]}
                        applicants={5}
                        capacity={10}
                    />
                    <JobCard
                        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/4368eb24adcd99b27948e96dd6f42755a5ba8dd952ed59bd8b5b9ff3a9fde84a?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                        jobType="Full-Time"
                        title="Interactive Developer"
                        company="Terraform"
                        location="Berlin, Germany"
                        tags={["Marketing", "Design"]}
                        applicants={5}
                        capacity={10}
                    />
                    <JobCard
                        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/a20ad071afd21516dee9c00d5bbf615af1aea3ee17c09f6786983cd29abd0c47?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                        jobType="Full-Time"
                        title="Product Designer"
                        company="ClassPass"
                        location="Berlin, Germ.."
                        tags={["Business", "Design"]}
                        applicants={5}
                        capacity={10}
                    />
                </div>
            </div>
        </section>
    </>
)
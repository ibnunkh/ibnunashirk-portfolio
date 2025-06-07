
const AboutInfo = () => {
    return (
        <div className="text-left max-w-xl px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4 leading-tight text-white">
                Hello
                <span className="animate-wave inline-block origin-[70%_70%]">👋</span>
                , my name is <br />
                <span className="font-montserrat bg-gradient-to-r from-blue-400 via-gray-300 to-blue-400 text-transparent bg-clip-text">
                    Ibnu Nashir Khuluq.
                </span>
            </h2>

            <p className="text-sm md:text-lg font-lato mb-4 leading-relaxed text-slate-300">
                Graduated from SMA Istiqamah Bandung. I began my career journey as a
                freelance video editor and later gained internship experience as a tax
                staff at an accounting firm, where I developed strong attention to
                detail and structured work habits.
            </p>

            <p className="text-sm md:text-lg font-lato mb-4 leading-relaxed text-slate-300">
                My growing interest in technology led me to explore web development,
                with a strong focus on Frontend Development. I enrolled in a Web
                Developer Bootcamp at Harisenin.com, specializing in frontend
                technologies, where I built several projects using React, JavaScript,
                and Next.js.
            </p>

            <p className="text-sm md:text-lg font-lato leading-relaxed text-slate-300">
                I have a passion for learning new things, solving technical
                challenges, and collaborating with others to create clean, responsive,
                and user-friendly web interfaces. I am currently seeking opportunities
                as a Frontend Developer and am eager to grow while contributing
                meaningfully.
            </p>
        </div>
    );
};

export default AboutInfo;

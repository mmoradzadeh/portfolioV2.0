import profileImage from '../assets/profilePic.jpeg';

export const Home = () => {
    return (
        <section id="home" className="dark-bg text-white pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center hero-content">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-red-600">Mehdi Moradzadeh</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Software Engineer</h2>
                    <p className="text-lg mb-8 text-gray-300 max-w-lg">
                        I build exceptional digital experiences with modern technologies. Passionate about
                        creating efficient, scalable solutions that make an impact.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#projects"
                            className="btn-red text-white px-6 py-3 rounded-lg font-semibold text-center"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="btn-outline-white text-white px-6 py-3 rounded-lg font-semibold text-center"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center hero-image">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-red-600 rounded-full opacity-20 blur-xl"></div>
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="relative w-full h-full rounded-full object-cover border-4 border-white floating"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

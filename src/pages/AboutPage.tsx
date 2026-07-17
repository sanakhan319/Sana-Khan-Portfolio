import { motion } from 'framer-motion';
import {
  GraduationCap,
  Target,
  MapPin,
  Mail,
  Download,
  Award,
} from 'lucide-react';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import { personalInfo, skillCategories, timelineEvents } from '../data/portfolio';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[128px]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              Passionate developer building the future, one line of code at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Introduction */}
      <SectionWrapper id="introduction">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto glass rounded-2xl p-1">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                  <span className="text-9xl font-bold gradient-text">S</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-lg glass-strong">
                <span className="text-primary-400 font-medium text-sm">{personalInfo.experience}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              I'm <span className="gradient-text">{personalInfo.name}</span>
            </h2>
            <p className="text-primary-400 font-medium mb-4">
              {personalInfo.role}
            </p>
            <p className="text-dark-300 leading-relaxed mb-6">
              {personalInfo.introduction}
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-dark-300">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-dark-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              {/* <div className="flex items-center gap-3 text-dark-300">
                <GitHub className="w-4 h-4 text-primary-400" />
                <span className="text-sm">GitHub.com/sana</span>
              </div> */}
              {/* <div className="flex items-center gap-3 text-dark-300">
                <LinkedIn className="w-4 h-4 text-primary-400" />
                <span className="text-sm">linkedin.com/in/sana</span>
              </div> */}
            </div>
            <a href="#" className="btn-primary">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Education Section */}
      <SectionWrapper id="education" className="bg-dark-900/50">
        <SectionTitle
          title="Education"
          subtitle="My academic background and certifications"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 card-hover"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Academic Education</h3>
                <p className="text-dark-500 text-sm">Formal Education</p>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed">
              Details to be updated. Pursuing studies with a focus on computer science
              and software development fundamentals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl p-6 card-hover"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Certifications</h3>
                <p className="text-dark-500 text-sm">Online Courses & Certificates</p>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed">
              Self-taught through online platforms, building real-world projects and
              continuously expanding skill set through hands-on practice.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Skills & Technologies */}
      <SectionWrapper id="skills-technologies">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="My technical toolkit organized by category"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-dark-300">{skill.name}</span>
                      <span className="text-dark-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-dark-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Development Journey Timeline */}
      <SectionWrapper id="timeline" className="bg-dark-900/50">
        <SectionTitle
          title="Development Journey"
          subtitle="Key milestones in my learning path"
        />
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

            {timelineEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`relative flex items-start gap-6 mb-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ml-12 md:ml-0 ${
                    i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  }`}
                >
                  <div className="glass rounded-xl p-5 card-hover inline-block text-left">
                    <span className="text-primary-400 text-sm font-mono font-semibold">
                      {event.year}
                    </span>
                    <h3 className="text-white font-semibold mt-1">{event.title}</h3>
                    <p className="text-dark-400 text-sm mt-2">{event.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 border-2 border-dark-950 z-10 mt-6" />

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Career Goals */}
      <SectionWrapper id="career-goals">
        <SectionTitle
          title="Career Goals"
          subtitle="My vision for the future"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 md:p-10 max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-primary-400" />
          </div>
          <p className="text-dark-300 leading-relaxed text-lg">
            {personalInfo.careerObjective}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {['Full Stack Development', 'AI Integration', 'Cloud Technologies', 'Mobile Development', 'Open Source'].map(
              (goal) => (
                <span
                  key={goal}
                  className="px-4 py-2 text-sm rounded-lg bg-primary-500/10 text-primary-300 border border-primary-500/20"
                >
                  {goal}
                </span>
              )
            )}
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}

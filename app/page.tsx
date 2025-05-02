//@ts-nocheck

"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Activity,
  Zap,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Award,
  Users,
  Building,
  Heart,
  ArrowDown,
  Star,
  Smartphone,
  Laptop,
  Tablet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GridBackground from "@/components/grid-background";
import ParticleBackground from "@/components/particle-background";
import CountUp from "@/components/count-up";
import image from "@/assets/SPARK_HEALTH.png";
import erlan from "@/assets/erlan.png";
import gaidar from "@/assets/gaidar.png";
import ruslan from "@/assets/ruslan.png";
import artem from "@/assets/artem.jpg";

export default function Home() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f0f14]">
      <GridBackground />
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10 z-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-[oklch(0.6_0.2_240)] blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 rounded-full bg-[oklch(0.5_0.15_280)] blur-[120px]" />
      </motion.div>

      <header className="relative z-10">
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 200,
              }}
            >
              <Sparkles className="h-7 w-7 text-[oklch(0.6_0.2_240)]" />
            </motion.div>
            <motion.span
              className="text-xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Spark Health
            </motion.span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#features" label="Возможности" delay={0.3} />
            <NavLink
              href="#how-it-works"
              label="Как это работает"
              delay={0.4}
            />
            <NavLink href="#testimonials" label="Отзывы" delay={0.5} />
            <NavLink href="#faq" label="Вопросы" delay={0.6} />
            <NavLink href="#blog" label="Блог" delay={0.7} />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button className="bg-[oklch(0.6_0.2_240)] hover:bg-[oklch(0.5_0.2_240)] text-white">
              Начать бесплатно
            </Button>
          </motion.div>
        </nav>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Революция в здравоохранении <br />
                <span className="text-[oklch(0.6_0.2_240)]">
                  с технологиями будущего
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              Spark Health объединяет передовые технологии и медицинскую
              экспертизу, чтобы предоставить вам персонализированное
              здравоохранение нового поколения.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <Button className="bg-[oklch(0.6_0.2_240)] hover:bg-[oklch(0.5_0.2_240)] text-white px-8 py-6 text-lg group">
                Попробовать сейчас
                <motion.span
                  className="inline-block ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-6 text-lg"
              >
                Узнать больше
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-14 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: "easeInOut",
                }}
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-pointer bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] p-3 rounded-full backdrop-blur-sm"
              >
                <ArrowDown className="h-6 w-6 text-white" />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-20 relative"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            {/* <div className="bg-[oklch(0.15_0.2_240)] p-2 rounded-xl border border-[oklch(0.3_0.2_240)] shadow-2xl shadow-[oklch(0.6_0.2_240)]/20">
              <div className="aspect-video rounded-lg overflow-hidden bg-[oklch(0.2_0.2_240)] flex items-center justify-center">
                <img
                  src={image.src}
                  alt="Интерфейс Spark Health"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}

            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-[oklch(0.6_0.2_240)] rounded-full blur-[100px] opacity-50"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 bg-[oklch(0.6_0.2_240)] rounded-full blur-[100px] opacity-50"
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.15, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 10,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </section>

        {/* Stats Section - NEW */}
        <AnimatedSection id="stats" className="py-16 bg-[#12121a]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard
                icon={<Users className="h-8 w-8" />}
                value={25000}
                plus={true}
                label="Пользователей"
                delay={0.1}
              />
              <StatCard
                icon={<Building className="h-8 w-8" />}
                value={150}
                plus={true}
                label="Медицинских центров"
                delay={0.2}
              />
              <StatCard
                icon={<Heart className="h-8 w-8" />}
                value={94}
                suffix="%"
                label="Уровень удовлетворенности"
                delay={0.3}
              />
              <StatCard
                icon={<Award className="h-8 w-8" />}
                value={12}
                plus={true}
                label="Наград и достижений"
                delay={0.4}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection id="features" className="py-20 bg-[#13131a]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Передовые{" "}
                <span className="text-[oklch(0.6_0.2_240)]">возможности</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Наша платформа сочетает в себе инновационные технологии для
                обеспечения наилучшего опыта здравоохранения
              </motion.p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Shield className="h-10 w-10" />}
                title="Защита данных"
                description="Ваши медицинские данные защищены по высшим стандартам безопасности с использованием передовых технологий шифрования."
              />
              <FeatureCard
                icon={<Activity className="h-10 w-10" />}
                title="Мониторинг в реальном времени"
                description="Отслеживайте ваши показатели здоровья в режиме реального времени с мгновенными уведомлениями и аналитикой."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10" />}
                title="Искусственный интеллект"
                description="Наши алгоритмы ИИ анализируют ваши данные для предоставления персонализированных рекомендаций по здоровью."
              />
              <FeatureCard
                icon={<Sparkles className="h-10 w-10" />}
                title="Персонализация"
                description="Индивидуальные планы здоровья, адаптированные к вашим уникальным потребностям и целям."
              />
              <FeatureCard
                icon={<ArrowRight className="h-10 w-10" />}
                title="Интеграция устройств"
                description="Подключайте любые медицинские устройства и носимые гаджеты для комплексного мониторинга здоровья."
              />
              <FeatureCard
                icon={<ChevronRight className="h-10 w-10" />}
                title="Телемедицина"
                description="Мгновенный доступ к врачам и специалистам через видеоконсультации прямо из приложения."
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="how-it-works" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Как это{" "}
                <span className="text-[oklch(0.6_0.2_240)]">работает</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Простой процесс для революционного здравоохранения
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <StepCard
                number="01"
                title="Регистрация"
                description="Создайте аккаунт и заполните свой медицинский профиль для персонализированного опыта."
                delay={0.1}
              />
              <StepCard
                number="02"
                title="Подключение"
                description="Интегрируйте ваши устройства и медицинские сервисы для комплексного мониторинга."
                delay={0.3}
              />
              <StepCard
                number="03"
                title="Трансформация"
                description="Получайте персонализированные рекомендации и улучшайте свое здоровье день за днем."
                delay={0.5}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials - NEW */}
        <AnimatedSection id="testimonials" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Что говорят{" "}
                <span className="text-[oklch(0.6_0.2_240)]">наши клиенты</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Отзывы пациентов и медицинских специалистов, использующих нашу
                платформу
              </motion.p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                image="/avatar-woman-1.png"
                name="Анна Петрова"
                role="Терапевт, Клиника Здоровья"
                stars={5}
                quote="Платформа Spark Health полностью изменила мой подход к работе с пациентами. Точные данные и прогнозы помогают принимать более обоснованные решения."
                delay={0.1}
              />
              <TestimonialCard
                image="/avatar-man-1.png"
                name="Максим Ковалев"
                role="Пациент"
                stars={5}
                quote="После года использования Spark Health мои показатели здоровья значительно улучшились. Удобный интерфейс и персональные рекомендации действительно работают!"
                delay={0.3}
              />
              <TestimonialCard
                image="/avatar-woman-2.png"
                name="Елена Соколова"
                role="Главврач, Медицинский центр 'Надежда'"
                stars={4}
                quote="Внедрение Spark Health в нашем центре позволило сократить время диагностики на 40% и повысить удовлетворенность пациентов."
                delay={0.5}
              />
            </motion.div>

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="border-[oklch(0.3_0.2_240)] text-white hover:bg-[oklch(0.3_0.2_240)] hover:text-white transition-all"
              >
                Все отзывы <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
        {/* FAQ Section - NEW */}
        <AnimatedSection id="faq" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Часто задаваемые{" "}
                <span className="text-[oklch(0.6_0.2_240)]">вопросы</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Ответы на наиболее часто задаваемые вопросы о платформе Spark
                Health
              </motion.p>
            </div>

            <motion.div
              className="max-w-3xl mx-auto bg-[rgba(30,30,40,0.5)] backdrop-blur-sm rounded-xl border border-[oklch(0.3_0.2_240)] p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                <FaqItem
                  value="item-1"
                  question="Что такое Spark Health?"
                  answer="Spark Health - это инновационная платформа для мониторинга и улучшения здоровья, которая объединяет передовые технологии ИИ, телемедицину и интеграцию с медицинскими устройствами для предоставления персонализированного опыта здравоохранения."
                  delay={0.1}
                />
                <FaqItem
                  value="item-2"
                  question="Как обеспечивается безопасность моих данных?"
                  answer="Мы используем многоуровневое шифрование данных, соответствуем всем стандартам безопасности медицинской информации и имеем строгие политики доступа к данным. Ваша информация хранится на защищенных серверах с постоянным мониторингом."
                  delay={0.2}
                />
                <FaqItem
                  value="item-3"
                  question="Какие устройства совместимы с платформой?"
                  answer="Spark Health интегрируется с большинством популярных фитнес-трекеров, умных часов, глюкометров, тонометров и других медицинских устройств. Полный список совместимых устройств доступен в нашей документации."
                  delay={0.3}
                />
                <FaqItem
                  value="item-4"
                  question="Могу ли я получить консультацию врача через платформу?"
                  answer="Да, Spark Health предлагает возможность видеоконсультаций с сертифицированными врачами различных специальностей. В зависимости от вашего тарифного плана, вы можете получить определенное количество консультаций в месяц."
                  delay={0.4}
                />
                <FaqItem
                  value="item-5"
                  question="Как работают рекомендации на основе ИИ?"
                  answer="Наши алгоритмы искусственного интеллекта анализируют ваши данные здоровья, активности, сна и питания, сравнивают их с научными исследованиями и медицинскими протоколами, и формируют персонализированные рекомендации для улучшения вашего здоровья."
                  delay={0.5}
                />
              </Accordion>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Team Section - NEW */}
        <AnimatedSection id="team" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Наша <span className="text-[oklch(0.6_0.2_240)]">команда</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Эксперты в области медицины и технологий, создающие будущее
                здравоохранения
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TeamMember
                image={ruslan.src}
                name="Руслан Махматов"
                delay={0.1}
              />
              <TeamMember image={erlan.src} name="Ерлан Жумабаев" delay={0.2} />
              <TeamMember
                image={gaidar.src}
                name="Гайдар Тимирбаев"
                delay={0.3}
              />
              <TeamMember image={artem.src} name="Артем Андреев" delay={0.4} />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Свяжитесь с{" "}
                  <span className="text-[oklch(0.6_0.2_240)]">нами</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  У вас есть вопросы или вы хотите узнать больше о нашей
                  платформе? Заполните форму, и мы свяжемся с вами в ближайшее
                  время.
                </p>
                <div className="space-y-6">
                  <ContactItem
                    icon={<Phone className="h-6 w-6" />}
                    title="Телефон"
                    content="+7 (495) 123-45-67"
                    delay={0.1}
                  />
                  <ContactItem
                    icon={<Mail className="h-6 w-6" />}
                    title="Email"
                    content="info@sparkhealth.ru"
                    delay={0.2}
                  />
                  <ContactItem
                    icon={<MapPin className="h-6 w-6" />}
                    title="Адрес"
                    content="г. Москва, ул. Технологическая, 42, офис 500"
                    delay={0.3}
                  />
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-[rgba(30,30,40,0.5)] backdrop-blur-sm rounded-xl border border-[oklch(0.3_0.2_240)] p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Имя
                        </label>
                        <input
                          type="text"
                          className="w-full bg-[rgba(30,30,45,0.5)] border border-[oklch(0.3_0.2_240)] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[oklch(0.6_0.2_240)]"
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full bg-[rgba(30,30,45,0.5)] border border-[oklch(0.3_0.2_240)] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[oklch(0.6_0.2_240)]"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Тема
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[rgba(30,30,45,0.5)] border border-[oklch(0.3_0.2_240)] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[oklch(0.6_0.2_240)]"
                        placeholder="Тема сообщения"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Сообщение
                      </label>
                      <textarea
                        rows={5}
                        className="w-full bg-[rgba(30,30,45,0.5)] border border-[oklch(0.3_0.2_240)] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[oklch(0.6_0.2_240)]"
                        placeholder="Ваше сообщение..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-[oklch(0.6_0.2_240)] hover:bg-[oklch(0.5_0.2_240)] text-white py-6">
                      Отправить сообщение
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection id="cta" className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-[oklch(0.3_0.2_240)] to-[oklch(0.4_0.2_240)] rounded-3xl p-12 text-center max-w-5xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <GridBackground
                  cellSize={20}
                  lineColor="rgba(255,255,255,0.2)"
                />
              </div>

              <ParticleBackground />

              <div className="relative z-10">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Готовы начать свой путь к лучшему здоровью?
                </motion.h2>
                <motion.p
                  className="text-xl text-white/80 max-w-3xl mx-auto mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Присоединяйтесь к тысячам людей, которые уже трансформировали
                  свое здоровье с помощью Spark Health
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button className="bg-white text-[oklch(0.4_0.2_240)] hover:bg-gray-100 px-8 py-6 text-lg">
                    Начать бесплатный период
                    <motion.span
                      className="inline-block ml-2"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="relative z-10 bg-[#0f0f14] pt-20 pb-10 border-t border-[oklch(0.3_0.2_240)]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-6 w-6 text-[oklch(0.6_0.2_240)]" />
                <span className="text-xl font-bold text-white">
                  Spark Health
                </span>
              </div>
              <p className="text-gray-400">
                Революционная платформа здравоохранения, объединяющая технологии
                и медицинскую экспертизу.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">Компания</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Карьера
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Блог
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Пресса
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">Ресурсы</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Документация
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Помощь
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Сообщество
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Партнеры
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">Контакты</h3>
              <ul className="space-y-4">
                <li className="text-gray-400">info@sparkhealth.ru</li>
                <li className="text-gray-400">+7 (495) 123-45-67</li>
                <li className="text-gray-400">
                  Москва, ул. Технологическая, 42
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[oklch(0.3_0.2_240)] pt-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Spark Health. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Navigation Link Component
function NavLink({ href, label, delay = 0 }) {
  return (
    <motion.a
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative group"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {label}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[oklch(0.6_0.2_240)] transition-all duration-300 group-hover:w-full"></span>
    </motion.a>
  );
}

// Animated Section Component
function AnimatedSection({ id, className, children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      id={id}
      className={`${className} relative overflow-hidden`}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-[rgba(30,30,40,0.8)] backdrop-blur-sm p-8 rounded-xl border border-[oklch(0.3_0.2_240)] hover:border-[oklch(0.4_0.2_240)] transition-all duration-300"
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgba(35,35,50,0.9)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <motion.div
        className="text-[oklch(0.6_0.2_240)] mb-4"
        whileHover={{
          rotate: [0, -10, 10, -5, 0],
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

// Step Card Component
function StepCard({ number, title, description, delay = 0 }) {
  return (
    <motion.div
      className="text-center p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(30,30,45,0.3)",
        borderRadius: "1rem",
      }}
    >
      <motion.div
        className="text-6xl font-bold text-[oklch(0.6_0.2_240)] opacity-50 mb-4"
        whileHover={{
          scale: 1.2,
          opacity: 0.7,
          transition: { duration: 0.3 },
        }}
      >
        {number}
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

// Pricing Card Component
function PricingCard({
  title,
  price,
  period,
  features,
  buttonText,
  highlighted = false,
}) {
  return (
    <motion.div
      className={`bg-[rgba(30,30,40,0.8)] backdrop-blur-sm rounded-xl border ${
        highlighted
          ? "border-[oklch(0.6_0.2_240)]"
          : "border-[oklch(0.3_0.2_240)]"
      } overflow-hidden`}
      whileHover={{
        y: -10,
        boxShadow: highlighted
          ? "0 25px 50px -12px rgba(79, 70, 229, 0.25)"
          : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {highlighted && (
        <motion.div
          className="bg-[oklch(0.6_0.2_240)] text-white text-center py-2 font-medium"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          Рекомендуемый
        </motion.div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">{price}</span>
          {period && <span className="text-gray-400 ml-2">{period}</span>}
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-2 text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ rotate: 90, color: "oklch(0.6_0.2_240)" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <ChevronRight className="h-5 w-5 text-[oklch(0.6_0.2_240)] shrink-0 mt-0.5" />
              </motion.div>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
        <Button
          className={`w-full ${
            highlighted
              ? "bg-[oklch(0.6_0.2_240)] hover:bg-[oklch(0.5_0.2_240)] text-white"
              : "bg-[oklch(0.2_0.2_240)] hover:bg-[oklch(0.25_0.2_240)] text-white"
          }`}
        >
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
}

// Stat Card Component - NEW
function StatCard({
  icon,
  value,
  label,
  plus = false,
  suffix = "",
  delay = 0,
}) {
  return (
    <motion.div
      className="bg-[rgba(30,30,40,0.6)] backdrop-blur-sm p-6 rounded-xl border border-[oklch(0.3_0.2_240)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -5,
        backgroundColor: "rgba(35,35,50,0.7)",
        borderColor: "oklch(0.4_0.2_240)",
      }}
    >
      <motion.div
        className="text-[oklch(0.6_0.2_240)] mb-4"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        {icon}
      </motion.div>
      <div className="flex items-end gap-1">
        <CountUp value={value} className="text-4xl font-bold text-white" />
        {plus && (
          <span className="text-[oklch(0.6_0.2_240)] text-2xl font-bold mb-1">
            +
          </span>
        )}
        {suffix && (
          <span className="text-[oklch(0.6_0.2_240)] text-2xl font-bold mb-1">
            {suffix}
          </span>
        )}
      </div>
      <p className="text-gray-400 mt-2">{label}</p>
    </motion.div>
  );
}

// Team Member Card - NEW
function TeamMember({ image, name, role, delay = 0 }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="relative mb-4 w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-[oklch(0.3_0.2_240)]"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[oklch(0.3_0.2_240)]/80 via-transparent to-transparent flex items-end justify-center pb-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex gap-3">
            <a href="#" className="text-white hover:text-[oklch(0.6_0.2_240)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[oklch(0.6_0.2_240)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-[oklch(0.6_0.2_240)]">{role}</p>
    </motion.div>
  );
}

// Testimonial Card - NEW
function TestimonialCard({ image, name, role, stars = 5, quote, delay = 0 }) {
  return (
    <motion.div
      className="bg-[rgba(30,30,40,0.6)] backdrop-blur-sm p-6 rounded-xl border border-[oklch(0.3_0.2_240)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
        borderColor: "oklch(0.4_0.2_240)",
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + i * 0.1, type: "spring" }}
          >
            <Star
              className={`h-4 w-4 ${
                i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
              }`}
            />
          </motion.div>
        ))}
      </div>
      <blockquote className="text-gray-300 italic">"{quote}"</blockquote>
    </motion.div>
  );
}

// Partner Logo - NEW
function PartnerLogo({ index }) {
  return (
    <motion.div
      className="bg-[rgba(30,30,40,0.6)] backdrop-blur-sm p-6 rounded-xl border border-[oklch(0.3_0.2_240)] h-32 w-40 flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, borderColor: "oklch(0.4_0.2_240)" }}
    >
      <div className="w-20 h-20 bg-[oklch(0.6_0.2_240)]/20 rounded-full flex items-center justify-center">
        <span className="text-[oklch(0.6_0.2_240)] font-bold text-xl">
          П{index + 1}
        </span>
      </div>
    </motion.div>
  );
}

// FAQ Item - NEW
function FaqItem({ value, question, answer, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <AccordionItem
        value={value}
        className="border border-[oklch(0.3_0.2_240)] mb-4 rounded-lg bg-[rgba(30,30,40,0.5)] overflow-hidden"
      >
        <AccordionTrigger className="px-6 py-4 hover:bg-[rgba(40,40,60,0.5)] transition-colors text-left font-medium">
          {question}
        </AccordionTrigger>
        <AccordionContent className="px-6 py-4 text-gray-400">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}

// Blog Card - NEW
function BlogCard({ image, category, date, title, summary, delay = 0 }) {
  return (
    <motion.div
      className="bg-[rgba(30,30,40,0.6)] backdrop-blur-sm rounded-xl border border-[oklch(0.3_0.2_240)] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
        borderColor: "oklch(0.4_0.2_240)",
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-[oklch(0.6_0.2_240)] px-3 py-1 rounded-full text-xs font-medium text-white">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-400 mb-2">{date}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{summary}</p>
        <a
          href="#"
          className="text-[oklch(0.6_0.2_240)] hover:text-[oklch(0.5_0.2_240)] font-medium inline-flex items-center"
        >
          Читать далее <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

// Contact Item - NEW
function ContactItem({ icon, title, content, delay = 0 }) {
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="bg-[oklch(0.6_0.2_240)]/20 p-3 rounded-lg text-[oklch(0.6_0.2_240)]">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-medium mb-1">{title}</h3>
        <p className="text-gray-400">{content}</p>
      </div>
    </motion.div>
  );
}

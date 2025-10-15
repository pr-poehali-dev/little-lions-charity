import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [donationAmount, setDonationAmount] = useState("");

  const children = [
    {
      id: 1,
      name: "Маша",
      age: 5,
      diagnosis: "Лейкемия",
      story: "Маша любит рисовать и мечтает стать художником. Сейчас она проходит курс химиотерапии.",
      needed: 500000,
      collected: 350000,
      image: "https://cdn.poehali.dev/projects/1c550335-c843-4327-9bd8-f4ef9175fe7f/files/39b947a4-bcc0-4308-a2a1-8eeda4b45720.jpg"
    },
    {
      id: 2,
      name: "Даня",
      age: 7,
      diagnosis: "Порок сердца",
      story: "Даня обожает футбол и очень хочет снова играть с друзьями. Ему необходима операция на сердце.",
      needed: 800000,
      collected: 520000,
      image: "https://cdn.poehali.dev/projects/1c550335-c843-4327-9bd8-f4ef9175fe7f/files/873ec19e-71e9-4551-bc89-2183f901cb56.jpg"
    },
    {
      id: 3,
      name: "София",
      age: 4,
      diagnosis: "ДЦП",
      story: "София невероятно жизнерадостная девочка. Реабилитация поможет ей делать первые самостоятельные шаги.",
      needed: 400000,
      collected: 280000,
      image: "https://cdn.poehali.dev/projects/1c550335-c843-4327-9bd8-f4ef9175fe7f/files/39b947a4-bcc0-4308-a2a1-8eeda4b45720.jpg"
    }
  ];

  const reports = [
    { month: "Январь 2025", income: 1250000, expenses: 1180000, helped: 8 },
    { month: "Февраль 2025", income: 980000, expenses: 950000, helped: 6 },
    { month: "Март 2025", income: 1450000, expenses: 1420000, helped: 10 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/1c550335-c843-4327-9bd8-f4ef9175fe7f/files/daa1a25d-ed27-4d26-b152-3edff7906a0c.jpg" 
              alt="Маленькие львята" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-foreground">Маленькие львята</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#children" className="text-foreground hover:text-primary transition-colors">Подопечные</a>
            <a href="#help" className="text-foreground hover:text-primary transition-colors">Помочь</a>
            <a href="#reports" className="text-foreground hover:text-primary transition-colors">Отчёты</a>
            <a href="#volunteer" className="text-foreground hover:text-primary transition-colors">Волонтёрство</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Помочь сейчас
          </Button>
        </nav>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Каждый ребёнок заслуживает <br />
            <span className="text-primary">счастливое детство</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы помогаем детям с тяжёлыми заболеваниями получить необходимое лечение и вернуться к полноценной жизни
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="Heart" size={20} className="mr-2" />
              Сделать пожертвование
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Users" size={20} className="mr-2" />
              Стать волонтёром
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <Card className="border-2 animate-scale-in">
              <CardHeader>
                <Icon name="Heart" size={40} className="mx-auto text-primary mb-2" />
                <CardTitle>156 детей</CardTitle>
                <CardDescription>получили помощь</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Icon name="Users" size={40} className="mx-auto text-secondary mb-2" />
                <CardTitle>78 волонтёров</CardTitle>
                <CardDescription>помогают нам</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Icon name="Smile" size={40} className="mx-auto text-muted mb-2" />
                <CardTitle>24 ребёнка</CardTitle>
                <CardDescription>сейчас под опекой</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">О нашей организации</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-4">
                Благотворительный фонд "Маленькие львята" помогает детям с тяжёлыми заболеваниями с 2018 года. 
                Мы верим, что каждый ребёнок достоин счастливого и здорового детства.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Наша миссия — обеспечить детям доступ к качественному лечению, реабилитации и поддержке, 
                независимо от финансовых возможностей их семей.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span>Прозрачность</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="text-primary" size={24} />
                  <span>Надёжность</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Heart" className="text-primary" size={24} />
                  <span>Забота</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/1c550335-c843-4327-9bd8-f4ef9175fe7f/files/873ec19e-71e9-4551-bc89-2183f901cb56.jpg" 
                alt="Наша команда" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="children" className="py-20 px-4 bg-gradient-to-b from-white to-accent">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Наши подопечные</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Познакомьтесь с детьми, которым мы помогаем. Каждая история уникальна, но все они объединены надеждой и верой в лучшее
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {children.map((child) => {
              const progress = (child.collected / child.needed) * 100;
              return (
                <Card key={child.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={child.image} 
                      alt={child.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{child.name}, {child.age} лет</CardTitle>
                    <CardDescription>{child.diagnosis}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{child.story}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Собрано</span>
                        <span className="font-semibold">{child.collected.toLocaleString()} ₽</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                      <div className="text-sm text-muted-foreground">
                        Нужно: {child.needed.toLocaleString()} ₽
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Помочь {child.name}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="help" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Как помочь</h2>
          <p className="text-center text-muted-foreground mb-12">
            Ваша поддержка может изменить жизнь ребёнка. Выберите удобный способ помощи
          </p>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Сделать пожертвование</CardTitle>
              <CardDescription>Любая сумма имеет значение и помогает детям</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-4 gap-3">
                {[500, 1000, 3000, 5000].map((amount) => (
                  <Button
                    key={amount}
                    variant={donationAmount === amount.toString() ? "default" : "outline"}
                    className={donationAmount === amount.toString() ? "bg-primary" : ""}
                    onClick={() => setDonationAmount(amount.toString())}
                  >
                    {amount} ₽
                  </Button>
                ))}
              </div>
              <div className="space-y-2">
                <Label htmlFor="custom-amount">Другая сумма</Label>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Введите сумму"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="donor-name">Ваше имя (необязательно)</Label>
                <Input id="donor-name" placeholder="Иван Иванов" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="donor-email">Email для отчёта</Label>
                <Input id="donor-email" type="email" placeholder="ivan@example.com" />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
                <Icon name="Heart" size={20} className="mr-2" />
                Помочь сейчас
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Платёж безопасен и защищён. Вы получите подтверждение на email.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reports" className="py-20 px-4 bg-gradient-to-b from-white to-accent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Финансовые отчёты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Мы гордимся прозрачностью наших финансов. Каждый рубль идёт на помощь детям
          </p>
          <Tabs defaultValue="monthly" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="monthly">По месяцам</TabsTrigger>
              <TabsTrigger value="detailed">Детальный отчёт</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="space-y-4">
              {reports.map((report, index) => (
                <Card key={index} className="animate-fade-in">
                  <CardHeader>
                    <CardTitle>{report.month}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Поступило</p>
                        <p className="text-2xl font-bold text-primary">
                          {report.income.toLocaleString()} ₽
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Потрачено</p>
                        <p className="text-2xl font-bold text-secondary">
                          {report.expenses.toLocaleString()} ₽
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Помогли детям</p>
                        <p className="text-2xl font-bold text-muted">
                          {report.helped}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="detailed">
              <Card>
                <CardHeader>
                  <CardTitle>Структура расходов</CardTitle>
                  <CardDescription>На что идут пожертвования</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Лечение и операции</span>
                      <span className="font-semibold">75%</span>
                    </div>
                    <Progress value={75} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Реабилитация</span>
                      <span className="font-semibold">15%</span>
                    </div>
                    <Progress value={15} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Административные расходы</span>
                      <span className="font-semibold">7%</span>
                    </div>
                    <Progress value={7} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Психологическая поддержка</span>
                      <span className="font-semibold">3%</span>
                    </div>
                    <Progress value={3} className="h-3" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="volunteer" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Волонтёрство</h2>
          <p className="text-center text-muted-foreground mb-12">
            Станьте частью нашей команды. Ваше время и участие бесценны
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <Icon name="HandHeart" size={32} className="text-primary mb-2" />
                <CardTitle>Помощь в организации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Участвуйте в мероприятиях, помогайте с документами и координацией</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="MessageCircle" size={32} className="text-secondary mb-2" />
                <CardTitle>Психологическая поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Общайтесь с детьми и их семьями, дарите им надежду и позитив</p>
              </CardContent>
            </Card>
          </div>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Заявка волонтёра</CardTitle>
              <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="v-name">Имя</Label>
                  <Input id="v-name" placeholder="Иван" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="v-surname">Фамилия</Label>
                  <Input id="v-surname" placeholder="Иванов" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="v-email">Email</Label>
                <Input id="v-email" type="email" placeholder="ivan@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="v-phone">Телефон</Label>
                <Input id="v-phone" type="tel" placeholder="+7 (900) 123-45-67" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="v-message">Расскажите о себе</Label>
                <Textarea 
                  id="v-message" 
                  placeholder="Почему вы хотите стать волонтёром? Какой у вас опыт?"
                  rows={4}
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-white to-accent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@lvyata.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">Москва, ул. Доброты, 12</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="c-name">Имя</Label>
                  <Input id="c-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-email">Email</Label>
                  <Input id="c-email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-message">Сообщение</Label>
                  <Textarea id="c-message" rows={3} />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/1c550335-c843-4327-9bd8-f4ef9175fe7f/files/daa1a25d-ed27-4d26-b152-3edff7906a0c.jpg" 
                  alt="Маленькие львята" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-lg font-bold">Маленькие львята</span>
              </div>
              <p className="text-sm text-gray-300">
                Помогаем детям с тяжёлыми заболеваниями с 2018 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#children" className="hover:text-white transition-colors">Подопечные</a></li>
                <li><a href="#help" className="hover:text-white transition-colors">Помочь</a></li>
                <li><a href="#volunteer" className="hover:text-white transition-colors">Волонтёрство</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Реквизиты</h3>
              <p className="text-sm text-gray-300">ИНН: 1234567890</p>
              <p className="text-sm text-gray-300">ОГРН: 1234567890123</p>
              <p className="text-sm text-gray-300">Счёт: 40703810000000000000</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
            <p>© 2025 Благотворительный фонд "Маленькие львята". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

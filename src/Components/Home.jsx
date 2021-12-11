import React from "react";
import "../css/Home.css";
import Carousel from "react-elastic-carousel";
import burger from "../img/burger.png";
import logo_header from "../img/logo-header.svg";
import mail_header from "../img/mail.svg";
import phone_header from "../img/phone.svg";
import download_header from "../img/download.svg";
import one_header from "../img/01.svg";
import two_header from "../img/02.svg";
import three_header from "../img/03.svg";
import fon_header from "../img/photo-sity.jpg";
import video_header from "../img/video_header.png";
import okey_section_one from "../img/iconOkey.png";
import tv_section_one from "../img/tv.png";
import patrick_section_two from "../img/patrick.png";
import vector_section_two from "../img/vector_right.svg";
import house_section_two from "../img/photoHouse.png";
import teplovizor_section_two from "../img/photoTeplovizor.png";
import paper_section_two from "../img/photoPaper.png";
import person_section_two from "../img/photoPerson.png";
import man_section_three from "../img/photoMan.png";
import stepOne_section_three from "../img/step1.png";
import circleLogo_section_three from "../img/circleLogo2.png";
import stepTwo_section_three from "../img/step2.png";
import stepThree_section_three from "../img/step3.png";
import locator_section_three from "../img/locator.png";
import inst2_section_three from "../img/inst2.png";
import inst3_section_three from "../img/inst3.png";
import inst4_section_three from "../img/inst4.png";
import people_section_three from "../img/people.jpg";
import sity_section_four from "../img/sity2.png";
import fileOne_section_five from "../img/1file.jpg";
import fileTwo_section_five from "../img/2file.jpg";
import video_section_six from "../img/video66.png";
import man_section_six from "../img/man6.png";
import sing_section_six from "../img/sing6.svg";
import doc_section_seven from "../img/doc7.jpg";
import huawei_section_seven from "../img/huawei7.png";
import life_section_seven from "../img/life7.png";
import alesya_section_seven from "../img/alesya7.png";
import mts_section_seven from "../img/mts7.png";
import view_section_seven from "../img/view7.svg";
import sity_section_reviews from "../img/sity8.png";
import vector_section_reviews from "../img/vector_ok8.png";
import mail_footer from "../img/mail_footer.png";
import phone_footer from "../img/phone_footer.png";
import home_footer from "../img/home_footer.svg";

function Home() {
  return (
    <div className="wrapper">
      <div className="wrapper_container">
        {/* block header */}
        <header className="wrapper_container_header_block">
          <img src={fon_header} alt="fon" className="fone_header_block_img" />
          {/* up block */}
          <div className="header_block_up_global">
            <div className="header_block_up">
              <div
                style={{ display: "flex" }}
                className="header_block_up_block1"
              >
                {" "}
                <img
                  src={burger}
                  alt="burger_header"
                  className="header_burger"
                />
                <img
                  src={logo_header}
                  alt="logo_header"
                  className="logo_header"
                />
              </div>
              <div style={{ display: "flex" }} className="header_block_up_gl">
                <div className="header_block_up_center_text">
                  <p className="header_block_up_center_text-p">
                    Пишите нам на email
                  </p>
                  <div className="header_block_up_center_text-row">
                    <img
                      src={mail_header}
                      alt="mail"
                      width="10px"
                      height="8px"
                    />
                    <p className="header_block_up_center_text-row-p">
                      info@diagnistics.by
                    </p>
                  </div>
                </div>
                <div className="header_block_up_right_side">
                  <div className="header_block_up_right_side-row">
                    <img
                      src={phone_header}
                      alt="phone"
                      width="11px"
                      height="11px"
                    />
                    <p className="header_block_up_right_side-row-p">
                      Есть вопросы? Звоните!
                    </p>
                  </div>
                  <p className="header_block_up_right_side-p">
                    +375 (29) 456-45-45
                  </p>
                </div>
              </div>
            </div>
            {/* content header */}
            <div className="header_block_content">
              <div className="header_block_content_leftSide">
                <p className="header_block_content_leftSide-p1">
                  Независимое обследование зданий и сооружений
                </p>
                <p className="header_block_content_leftSide-p2">
                  антенн, труб, теплосетей, канализаций и других объектов
                  строительства
                </p>
              </div>
              <div className="header_block_content_rightSide">
                <button className="content_rightSide_button">
                  <div className="content_rightSide_button_text">
                    <img
                      src={download_header}
                      alt="download_header_img"
                      className="download_header_img"
                    />
                    <p>получить коммерческое</p>
                  </div>
                </button>
                <p className="header_block_content_rightSide-p">
                  Отправьте техзадание и получите коммерческое предложение в
                  течении 15 минут на свой email или в мессенджер
                </p>
              </div>
            </div>
            {/* down content block header */}
            <div className="header_block_footer_content">
              <div className="header_block_footer_content_leftSide">
                <div className="header_block_footer_content_leftSide-row">
                  <img src={one_header} alt="one" className="numbers_header" />
                  <p className="footer_content_leftSide-row-p">
                    Начинаем работать без аванса
                  </p>
                </div>
                <div className="header_block_footer_content_leftSide-row">
                  <img src={two_header} alt="two" className="numbers_header" />
                  <p className="footer_content_leftSide-row-p">
                    Предоставляем отсрочку платежа
                  </p>
                </div>
                <div className="header_block_footer_content_leftSide-row2">
                  <img
                    src={three_header}
                    alt="three"
                    className="numbers_header"
                  />
                  <p className="footer_content_leftSide-row-p">
                    Всегда называем справедливую цену
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={video_header}
                  alt="video_img"
                  className="video_img_header"
                />
              </div>
            </div>
          </div>
        </header>
        {/* section #1 */}
        <section>
          <div className="wrapper_container_up_info_block">
            <div className="wrapper_container_up_info_block_gl_left">
              <div className="wrapper_container_up_info_block_left">
                <p className="wrapper_container_up_info_block_left-p1">
                  Мы работаем быстро и наши отчеты проходят согласование с
                  первого раза
                </p>
                <p className="wrapper_container_up_info_block_left-p2">
                  Над вашим объектом работает целая команда: 3 ГИПа (главных
                  инженеров проектов) с опытом работы от 6 лет и 2 штатных
                  сотрудника для камеральных работ
                </p>
              </div>
            </div>
            <div className="wrapper_container_up_info_block_gl_right">
              <div className="wrapper_container_up_info_block_right">
                <p className="wrapper_container_up_info_block_right-p">
                  Вы и Ваши архитекторы получаете:
                </p>
                <div className="up_info_block_right_inner_block">
                  <img
                    src={okey_section_one}
                    alt="okey"
                    width="30px"
                    height="30px"
                  />
                  <p className="up_info_block_right_inner_block-p">
                    Отчет на который на 100% можно положиться{" "}
                  </p>
                </div>
                <div className="up_info_block_right_inner_block">
                  <img
                    src={okey_section_one}
                    alt="okey"
                    width="30px"
                    height="30px"
                  />
                  <p className="up_info_block_right_inner_block-p">
                    Экономию времени и прогнозируемость сроков
                  </p>
                </div>
                <div className="up_info_block_right_inner_block">
                  <img
                    src={okey_section_one}
                    alt="okey"
                    width="30px"
                    height="30px"
                  />
                  <p className="up_info_block_right_inner_block-p">
                    Предварительные результаты сразу на месте
                  </p>
                </div>
              </div>
            </div>

            <img src={tv_section_one} alt="tv" className="section_one_tv_img" />
          </div>
        </section>
        {/* section #2 */}
        <section>
          <div className="wrapper_container_our_services_gl">
            <img
              src={patrick_section_two}
              alt="patrick"
              className="section_two_patrick_img"
            />
            <div className="wrapper_container_our_services">
              <div className="wrapper_container_our_services_text">
                <p className="wrapper_container_our_services_text-p1">Услуги</p>
                <p className="wrapper_container_our_services_text-p2">
                  Выполняем как комплексное обследование, так и отдельные виды
                  работ
                </p>
              </div>
              <div className="wrapper_container_our_services_content">
                {/* items */}
                <div className="wrapper_container_our_services_content_item">
                  <img
                    src={house_section_two}
                    alt="logo"
                    className="img_house_section2"
                  />
                  <p className="wrapper_container_our_services_content_item-p1">
                    Общее обследование
                  </p>
                  <p className="wrapper_container_our_services_content_item-p2">
                    Экспертиза отдельных конструкций, обмерные работы,
                    определение прочности, расчет несущей способности и т.д.
                  </p>
                  <div className="services_content_item_row">
                    <p className="services_content_item_row-p">Подробнее</p>
                    <img
                      src={vector_section_two}
                      alt="vector_right"
                      width="21px"
                      height="10px"
                    />
                  </div>
                </div>

                <div className="wrapper_container_our_services_content_item">
                  <img
                    src={teplovizor_section_two}
                    alt="logo"
                    className="img_house_section2"
                  />
                  <p className="wrapper_container_our_services_content_item-p1">
                    Тепловизионная съемка
                  </p>
                  <p className="wrapper_container_our_services_content_item-p2">
                    Исследование системы отопления, вентиляции и
                    кондиционирования, а также оценка энергоэффективности здания
                  </p>
                  <div className="services_content_item_row">
                    <p className="services_content_item_row-p">Подробнее</p>
                    <img
                      src={vector_section_two}
                      alt="vector_right"
                      width="21px"
                      height="10px"
                    />
                  </div>
                </div>

                <div className="wrapper_container_our_services_content_item">
                  <img
                    src={paper_section_two}
                    alt="logo"
                    className="img_house_section2"
                  />
                  <p className="wrapper_container_our_services_content_item-p1">
                    Телеинспекция инженерных сетей
                  </p>
                  <p className="wrapper_container_our_services_content_item-p2">
                    Цветная телевизионная съемка внутренней поверхности любых
                    протяженных объектов <br /> до 250 метров
                  </p>
                  <div className="services_content_item_row">
                    <p className="services_content_item_row-p">Подробнее</p>
                    <img
                      src={vector_section_two}
                      alt="vector_right"
                      width="21px"
                      height="10px"
                    />
                  </div>
                </div>

                <div className="wrapper_container_our_services_content_item">
                  <img
                    src={person_section_two}
                    alt="logo"
                    className="img_house_section2"
                  />
                  <p className="wrapper_container_our_services_content_item-p1">
                    Тахеометрическая съемка
                  </p>
                  <p className="wrapper_container_our_services_content_item-p2">
                    Построение чертежей при помощи лазера, который с точностью
                    до микрона определяет расположение объектов в пространстве
                  </p>
                  <div className="services_content_item_row">
                    <p className="services_content_item_row-p">Подробнее</p>
                    <img
                      src={vector_section_two}
                      alt="vector_right"
                      width="21px"
                      height="10px"
                    />
                  </div>
                </div>
              </div>
              <div className="services_footer_line"></div>
            </div>
          </div>
        </section>
        {/* section #3 */}
        <section>
          <div className="wrapper_container_we_working">
            <div className="wrapper_container_we_working_block">
              <p className="wrapper_container_we_working_block-p1">
                Мы работаем в комплексе
              </p>
              <p className="wrapper_container_we_working_block-p2">
                чтобы Вы не тратили время на поиск и организацию множества
                подрядчиков
              </p>
            </div>
            {/* step #1 */}
            <div className="wrapper_container_we_working_step1">
              <div className="we_working_step1_leftSide">
                <img
                  src={man_section_three}
                  alt="photo_man"
                  className="man_section3_img"
                />
              </div>
              <div className="we_working_step1_rightSide">
                <div className="we_working_step1_rightSide_up">
                  <div className="we_working_step1_rightSide_up-row">
                    <img
                      src={stepOne_section_three}
                      alt="step1"
                      className="step1_section3_img"
                    />
                    <p className="we_working_step1_rightSide_up-row-p">
                      Подготовительные работы
                    </p>
                  </div>
                  <p className="we_working_step1_rightSide_up-p">
                    Мы осматриваем здание, делаем замеры и проверяем наличие
                    визуально заметных дефектов: трещин, коррозии, повреждения
                    фундамента и т.д.{" "}
                  </p>
                </div>
                <div className="we_working_step1_rightSide_down">
                  <div className="we_working_step1_rightSide_down_img">
                    <img
                      src={circleLogo_section_three}
                      alt="logo"
                      className="circleLogo_section3_img"
                    />
                  </div>
                  <div className="we_working_step1_rightSide_down_rightBlock">
                    <p className="we_working_step1_rightSide_down_rightBlock-p1">
                      “Задача этого этапа получить максимально полное
                      представление о конструкции здания, условиях его
                      эксплуатации и возможных слабых местах“
                    </p>
                    <p className="we_working_step1_rightSide_down_rightBlock-p2">
                      Алексей, обследователь и главный инженер проектов
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* step #2 */}
            <div className="wrapper_container_we_working_step2">
              <div className="wrapper_container_we_working_step2_up">
                <img
                  src={stepTwo_section_three}
                  alt="step2"
                  className="step2_img"
                />
                <p className="wrapper_container_we_working_step2_up-p1">
                  Детальное инструментальное обследование
                </p>
                <p className="wrapper_container_we_working_step2_up-p2">
                  Мы понимаем насколько важны сроки и сколько может стоить день
                  задержки. Поэтому Вы никогда не услышите от нас слов “надо
                  подождать пару дней, пока освободится арендное оборудование” -
                  мы укомплектованы всем необходимым
                </p>
              </div>
              <div className="wrapper_container_we_working_step2_down">
                <div className="wrapper_container_we_working_step2_down_item">
                  <img
                    src={locator_section_three}
                    alt="item"
                    className="all_pribors_step2"
                  />
                  <p className="wrapper_container_we_working_step2_down_item-p">
                    Локатор арматуры “Profoscope”
                  </p>
                </div>

                <div className="wrapper_container_we_working_step2_down_item2">
                  <img
                    src={inst2_section_three}
                    alt="item"
                    className="all_pribors_step2"
                  />
                  <p className="wrapper_container_we_working_step2_down_item-p">
                    Измеритель прочности бетона <br />
                    “ОНИКС-1”
                  </p>
                </div>

                <div className="wrapper_container_we_working_step2_down_item2">
                  <img
                    src={inst3_section_three}
                    alt="item"
                    className="all_pribors_step2"
                  />
                  <p className="wrapper_container_we_working_step2_down_item-p">
                    Прибор ультразвукового действия <br />
                    “ПУЛЬСАР-2”
                  </p>
                </div>

                <div className="wrapper_container_we_working_step2_down_item2">
                  <img
                    src={inst4_section_three}
                    alt="item"
                    className="all_pribors_step2"
                  />
                  <p className="wrapper_container_we_working_step2_down_item-p">
                    Измеритель прочности бетона <br /> “Молоток Шмидта”
                  </p>
                </div>

                <div className="wrapper_container_we_working_step2_down_item">
                  <img
                    src={locator_section_three}
                    alt="item"
                    className="all_pribors_step2"
                  />
                  <p className="wrapper_container_we_working_step2_down_item-p">
                    Локатор арматуры “Profoscope”
                  </p>
                </div>
              </div>
            </div>
            {/* step #3 */}
            <div className="wrapper_container_we_working_step3">
              <div className="wrapper_container_we_working_step3_leftSide">
                <div className="working_step3_leftSide-row">
                  <img
                    src={stepThree_section_three}
                    alt="step1"
                    className="step1_section3_img"
                  />
                  <p className="we_working_step1_rightSide_up-row-p">
                    Обработка полученных данных
                  </p>
                </div>
                <p className="wrapper_container_we_working_step3_leftSide-p">
                  Детальный отчет с{" "}
                  <span className="span_step3">результатами обследования</span>{" "}
                  <br />
                  Вы получите через 7 дней. И на его основании сможете
                  определить судьбу объекта и прогнозировать затраты
                </p>
                <div className="working_step3_leftSide_list">
                  <div className="working_step3_leftSide_list-row">
                    <img
                      src={okey_section_one}
                      alt="okey"
                      width="30px"
                      height="30px"
                    />
                    <p className="working_step3_leftSide_list-p">
                      Мы оценим техническое состояние объекта и присвоим ему
                      категорию
                    </p>
                  </div>

                  <div className="working_step3_leftSide_list-row">
                    <img
                      src={okey_section_one}
                      alt="okey"
                      width="30px"
                      height="30px"
                    />
                    <p className="working_step3_leftSide_list-p">
                      Объясним причины появления дефектов и повреждений в
                      конструкциях
                    </p>
                  </div>

                  <div className="working_step3_leftSide_list-row">
                    <img
                      src={okey_section_one}
                      alt="okey"
                      width="30px"
                      height="30px"
                    />
                    <p className="working_step3_leftSide_list-p">
                      Сформируем техзадание на проектирование мероприятий по
                      восстановлению, усилению или ремонту конструкций,
                      оборудования и сетей
                    </p>
                  </div>
                </div>
              </div>
              <div className="wrapper_container_we_working_step3_img">
                <img
                  src={people_section_three}
                  alt="photo_man"
                  className="people_section3_img"
                />
              </div>
            </div>
          </div>
        </section>
        {/* section #4 */}
        <section>
          <div className="wrapper_container_order_service">
            <img
              src={sity_section_four}
              alt="sity"
              className="sity_setcion4_img"
            />
            <div className="wrapper_container_order_service_inner">
              <p className="wrapper_container_order_service_inner-p1">
                Закажите комплексное обследование и получите тепловизионную
                съемку <br />
                <span className="span_section4_service_inner">в подарок</span>
              </p>

              <p className="wrapper_container_order_service_inner-p2">
                Мы первая в Беларуси компания в составе которой есть
                аккредитованная тепловизионная лаборатория. <br />
                <br /> Наши аттестованные термографисты найдут утечки тепла,
                определят скрытые дефекты конструкции и подберут систему
                утепления, которую выдержат стены.
              </p>
              <div className="header_block_content_rightSide2">
                <button className="content_rightSide_button">
                  <div className="content_rightSide_button_text">
                    <img
                      src={download_header}
                      alt="download_header_img"
                      className="download_header_img"
                    />
                    <p>получить коммерческое</p>
                  </div>
                </button>
                <p className="header_block_content_rightSide-p2">
                  Отправьте техзадание и получите коммерческое предложение в
                  течении 15 минут
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* section 5 */}
        <section>
          <div className="wrapper_container_our_task">
            <div className="wrapper_container_our_task_leftSide">
              <div className="wrapper_container_our_task_leftSide_gl">
                <div className="wrapper_container_our_task_leftSide_up"></div>
                <div className="wrapper_container_our_task_leftSide-p">
                  Команда
                </div>
              </div>
            </div>
            <div className="wrapper_container_our_task_RightSide">
              <div className="wrapper_container_our_task_RightSide_up">
                <p className="wrapper_container_our_task_RightSide_up-p1">
                  Наша главная ценность - это кадровый состав
                </p>
                <p className="wrapper_container_our_task_RightSide_up-p2">
                  За каждым отчетом стоят люди, которые берут на себя
                  колоссальную ответственность. Поэтому{" "}
                  <span className="span_section5_task">
                    мы не готовы “просто подписать бумажку”
                  </span>
                  . <br /> <br /> Наши обследователи - это аттестованные ГИПы
                  (главные инженеры проектов), главные конструктора, инженеры,
                  термографисты и альпинисты, которые подтверждают свою
                  квалификацию на стажировках и курсах по 3-4 раза в году.
                </p>
              </div>
              <div className="wrapper_container_our_task_RightSide_slider">
                <Carousel itemsToShow={2}>
                  <div>
                    <img
                      src={fileOne_section_five}
                      alt="file"
                      className="section5_files"
                    />
                  </div>
                  <div>
                    <img
                      src={fileTwo_section_five}
                      alt="file"
                      className="section5_files"
                    />
                  </div>
                  <div>
                    <img
                      src={fileOne_section_five}
                      alt="file"
                      className="section5_files"
                    />
                  </div>
                  <div>
                    <img
                      src={fileTwo_section_five}
                      alt="file"
                      className="section5_files"
                    />
                  </div>
                  <div>
                    <img
                      src={fileOne_section_five}
                      alt="file"
                      className="section5_files"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        {/* section 6 */}
        <section>
          <div className="wrapper_container_cost_info">
            <div className="wrapper_container_cost_info_leftSide">
              <p className="wrapper_container_cost_info_leftSide-p1">
                Цена железная
              </p>
              <p className="wrapper_container_cost_info_leftSide-p2">
                больше не возьмем ни копейки
              </p>
              <p className="wrapper_container_cost_info_leftSide-p3">
                “Большинство предпринимателей работают по принципу “назову
                смешную цену и невыполнимые сроки, а потом им будет некуда
                деваться”.
                <br /> <br /> Мы работаем иначе - сразу{" "}
                <span className="text_span_section6">
                  называем справедливую цену и реальные даты. И мы гарантируем,
                </span>{" "}
                что ни цена, ни сроки не вырастут в процессе . <br />
                <br />С нами Вы получаете прогнозируемый результат: если мы
                говорим “сделаем за 10 дней”, значит уложимся в 10 дней и ни
                минутой позже.”
              </p>
              <div className="wrapper_container_cost_info_leftSide_text">
                <div className="wrapper_container_cost_info_leftSide_text_row">
                  <img
                    src={video_section_six}
                    alt="video"
                    className="video_section6_img"
                  />
                  <p className="wrapper_container_cost_info_leftSide_text_row-p">
                    видеообращение
                  </p>
                </div>

                <p className="wrapper_container_cost_info_leftSide_text-p">
                  Юрий Крупенько, Руководитель
                </p>
              </div>
            </div>
            <div className="wrapper_container_cost_info_rightSide">
              <img
                src={man_section_six}
                alt="photo_man"
                className="photo_man_section6"
              />
              <img
                src={sing_section_six}
                alt="sing"
                className="sing_section6"
              />
            </div>
          </div>
        </section>
        {/* section 7 - rewiews block */}
        <section>
          <div className="wrapper_container_reviews">
            <div className="wrapper_container_reviews_text">
              <p className="wrapper_container_reviews_text-p1">Отзывы</p>
              <p className="wrapper_container_reviews_text-p2">
                Каждый второй клиент приходит к нам по рекомендации
              </p>
              <p className="wrapper_container_reviews_text-p3">
                За 2018 год мы обследовали более 100 антенн, 800 труб и 500
                зданий. Мы работали для БОТ, Бэст, Huawei, МТС, фабрики “Алеся”
                и многих других требовательных клиентов. И вот, что они пишут о
                нас:
              </p>
            </div>
            <div className="wrapper_container_reviews_docs">
              <div className="wrapper_container_reviews_docs_item">
                <img
                  src={huawei_section_seven}
                  alt="icon"
                  className="huawei_section_seven"
                />
                <img
                  src={doc_section_seven}
                  alt="document"
                  className="doc_section_seven"
                />
                <p className="wrapper_container_reviews_docs_item-p">
                  ООО «Хуавей Беларусь»
                </p>
              </div>

              <div className="wrapper_container_reviews_docs_item">
                <img
                  src={life_section_seven}
                  alt="icon"
                  className="huawei_section_seven"
                />
                <img
                  src={doc_section_seven}
                  alt="document"
                  className="doc_section_seven"
                />
                <p className="wrapper_container_reviews_docs_item-p">
                  ЗАО «БеСТ»
                </p>
              </div>

              <div className="wrapper_container_reviews_docs_item">
                <img
                  src={alesya_section_seven}
                  alt="icon"
                  className="huawei_section_seven"
                />
                <img
                  src={doc_section_seven}
                  alt="document"
                  className="doc_section_seven"
                />
                <p className="wrapper_container_reviews_docs_item-p">
                  ОАО «Алеся»
                </p>
              </div>

              <div className="wrapper_container_reviews_docs_item">
                <img
                  src={mts_section_seven}
                  alt="icon"
                  className="huawei_section_seven"
                />
                <img
                  src={doc_section_seven}
                  alt="document"
                  className="doc_section_seven"
                />
                <p className="wrapper_container_reviews_docs_item-p">
                  СООО «Мобильные ТелеСистемы»
                </p>
              </div>
            </div>
            <button className="wrapper_container_reviews_btn">
              <div className="wrapper_container_reviews_btn-row">
                <img
                  src={view_section_seven}
                  alt="img_view"
                  className="view_section7"
                  width="13px"
                  height="9px"
                />
                <p className="wrapper_container_reviews_btn-p">
                  смотреть все благодарности (549 шт.)
                </p>
              </div>
            </button>
          </div>
        </section>
        {/* section # 8  (cost ITEMS) */}
        <section>
          <div className="wrapper_container_cost_item">
            <img
              src={sity_section_reviews}
              alt="sity"
              className="sity_section_reviews"
            />
            <div className="wrapper_container_cost_item_content">
              <p className="wrapper_container_cost_item_content-p1">
                <span className="span_cost_section8">
                  Узнайте точную стоимость
                </span>{" "}
                обследования Вашего объекта
              </p>
              <p className="wrapper_container_cost_item_content-p2">
                Отправьте нам техзадание, ответив на несколько вопросов, и Вы
                получите коммерческое предложение в течении 10-15 минут
              </p>
              <button className="wrapper_container_cost_item_btn">
                <div className="wrapper_container_cost_item_btn-row">
                  <img
                    src={vector_section_reviews}
                    alt="vector_ok"
                    width="14px"
                    height="12px"
                  />
                  <p className="wrapper_container_cost_item_btn-row-p">
                    Узнать стоимость обследования
                  </p>
                </div>
              </button>
            </div>
          </div>
        </section>
        {/* footer */}
        <footer>
          <div className="wrapper_container_footer">
            <div className="wrapper_container_footer_left">
              <p className="wrapper_container_footer_left-p">
                2016-2019 ООО "Инженерная Диагностика" Все права защищены. Бренд
                упакован Digital Butlers
              </p>
            </div>
            <div className="wrapper_container_footer_right">
              <div className="wrapper_container_footer_right-block1">
                <div className="wrapper_container_footer_right-block1-row">
                  <img
                    src={mail_footer}
                    alt="mail"
                    className="icon_footer"
                    width="10px"
                    height="12px"
                  />
                  <p className="wrapper_container_footer_right-block1-row-p">
                    Пишите нам на email
                  </p>
                </div>
                <p className="wrapper_container_footer_right-block1-p">
                  info@idi.by
                </p>
              </div>

              <div className="wrapper_container_footer_right-block1">
                <div className="wrapper_container_footer_right-block1-row">
                  <img
                    src={phone_footer}
                    alt="phone"
                    className="icon_footer"
                    width="12px"
                    height="12px"
                  />
                  <p className="wrapper_container_footer_right-block1-row-p">
                    Есть вопросы? Звоните!
                  </p>
                </div>
                <p className="wrapper_container_footer_right-block1-p">
                  +375 (29) 456-45-45
                </p>
              </div>

              <div className="wrapper_container_footer_right-block1">
                <div className="wrapper_container_footer_right-block1-row">
                  <img
                    src={home_footer}
                    alt="home"
                    className="icon_footer"
                    width="12px"
                    height="10px"
                  />
                  <p className="wrapper_container_footer_right-block1-row-p">
                    Заходите в гости
                  </p>
                </div>
                <p className="wrapper_container_footer_right-block1-p">
                  г. Минск, ул. Ленина, д.9, пом.3, оф.10
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;

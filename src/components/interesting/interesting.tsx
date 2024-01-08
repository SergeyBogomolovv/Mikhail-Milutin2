import React from 'react'
import { motion } from 'framer-motion'
import cl from './interesting.module.scss'
import {
  interestingImageAnimation,
  interestingTextAnimation,
  interestingTitleAnimation,
} from '../assets/animations'

export default function Interesting() {
  return (
    <motion.div className={cl.container}>
      <motion.div
        className={cl.title}
        variants={interestingTitleAnimation}
        custom={1}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        Аметист
      </motion.div>
      <div className={cl.description}>
        <motion.p
          custom={-1}
          variants={interestingTextAnimation}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          Красивая легенда об аметисте излагается во французской поэзии.
          <br />
          Бог Вакх, обиженный пренебрежением к своим страданиям, решил отомстить
          за себя и заявил, что первый человек, которого он встретит, будет
          брошен на растерзание тиграм. Этой жертвой стала девушку по имени
          Аметист, которая стояла на пути к служению в храм Дианы. Когда
          свирепые звери бросились на девушку, она стала молить бога и была
          спасена от злой участи, превратившись в чистый белый камень. Узнав о
          чуде и раскаявшись в своей жестокости, Вакх пролил виноградный сок на
          окаменевшее тело девушки, что придало камню прекрасный фиолетовый
          оттенок.
        </motion.p>
        <motion.img
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          custom={1}
          variants={interestingImageAnimation}
          src='https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-some-purple-crystals-sit-on-some-wood-image_2692473.jpg'
          alt=''
        />
        <motion.p
          custom={-1}
          variants={interestingTextAnimation}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          Аметист название от греческого "αμέθυστος" (amethystos) - буквально
          "не пьяный". Аметист фиолетовая, синевато-розовая или
          красно-фиолетовая разновидность кварца. Встречается обычно в виде
          свободно сидящих в пустотах и жилах среди кристаллических горных пород
          кристаллов и их сростков. Обычен в друзах и кристаллических щетках.
          Иногда аметист заключает в себе тонкие кристаллические пластинки
          гематита или игольчатые кристаллики гетита. Обычны для кристаллов
          аметиста, в особенности для крупных, жидкие и газово-жидкие включения
          в форме тончайших трубок - канальцев. Такие камни ошибочно называют
          "аметистовыми волосатиками"
        </motion.p>
        <motion.p
          custom={1}
          variants={interestingTextAnimation}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
        >
          Природная "смесь" аметиста и цитрина называется аметрин. Месторождения
          аметиста распространены по всему миру. Но особо красивые кристаллы
          добываются в Бразилии, Уругвае, на Урале, в Руанде, на Мадагаскаре и
          т.д.
        </motion.p>
        <motion.p
          custom={-1}
          variants={interestingTextAnimation}
          initial='hidden'
          viewport={{ once: true }}
          whileInView='visible'
        >
          Аметист высшего качества иногда называют "глубокий русский", что
          указывает на уральские камни из месторождения Ватиха. Эти аметисты
          отличаются тем, что при искусственном освещении окрашиваются в
          глубокий фиолетово-красный цвет со всполохами сине-фиолетового цвета.
          Месторождения таких аметистов, помимо Урала, известны в Уругвае и
          Руанде
        </motion.p>
        <motion.img
          custom={1}
          variants={interestingImageAnimation}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          src='https://sunlight.net/wiki/wp-content/uploads/2017/04/ametist1.jpg'
          alt=''
        />
        <motion.p
          custom={-1}
          viewport={{ once: true }}
          variants={interestingTextAnimation}
          initial='hidden'
          whileInView='visible'
        >
          Для аметистов характерна незначительная переменчивость окраски, что
          связано с четко выраженной зональной окраской природного минерала. Это
          обстоятельство делает аметист одним из сложных камней в огранке, т.к.
          от огранщика требуется особое умение правильно расположить камень,
          чтобы особо не были видны "белые зоны".
        </motion.p>
        <motion.p
          custom={1}
          viewport={{ once: true }}
          variants={interestingTextAnimation}
          initial='hidden'
          whileInView='visible'
        >
          Необходимо учитывать и тот факт, что устойчивость окраски аметистов из
          разных месторождений не одинаковы. Кристаллы аметиста из
          хрусталеносных жил устойчивы к прямым солнечным лучам, в то время как
          аметисты из жеод, обычно быстро выцветают под действием даже
          рассеянного солнечного света.
        </motion.p>
        <motion.p
          custom={-1}
          viewport={{ once: true }}
          variants={interestingTextAnimation}
          initial='hidden'
          whileInView='visible'
        >
          При нагревании около 250°С аметист теряет свою окраску, и постепенно
          преобретает желтый или яблочно-зеленоватый окрас, а также может
          полностью стать бесцветным. При температурах от 470 до 750°C камни
          приобретают светло-желтый, красно-коричневый, зеленый цвет.
          Изначальный цвет кристаллов может быть восстановлен с помощью
          рентгеновского облучения.
        </motion.p>
        <motion.img
          custom={1}
          viewport={{ once: true }}
          variants={interestingImageAnimation}
          initial='hidden'
          whileInView='visible'
          src='https://rekvizit.info/wp-content/uploads/2023/08/124.jpg'
          alt=''
        />
        <motion.p
          custom={-1}
          viewport={{ once: true }}
          variants={interestingTextAnimation}
          initial='hidden'
          whileInView='visible'
        >
          Термообработанные камни часто используются для имитации как более
          редких и дорогих камней (топаз империал, аквамарин и т.д.) так и для
          имитации других разновидностей кварца (цитрин, горный хрусталь,
          дымчатый кварц, празиолит). Кстати, празиолит один из самых редких
          разновидностей кварца. Как правило в ювелирных украшениях используется
          не природный празиолит, а термообработанный аметист.
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          className={cl.autor}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Автор статьи: Суарес Аким
        </motion.p>
      </div>
    </motion.div>
  )
}

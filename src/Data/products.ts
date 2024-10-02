import facewash from '../Images/ProductImages/fairnessfacewash.jpeg'
import nightcream from '../Images/ProductImages/nightcream.jpeg'
import daycream from '../Images/ProductImages/daycream.jpeg'
import mintantiAcne from '../Images/ProductImages/mintfacewash.jpeg'
import tumeric from '../Images/ProductImages/tumericday&night.jpeg'
import roseT from '../Images/ProductImages/roseT.jpeg'
import shampoo from '../Images/ProductImages/shampoo.jpeg'
import conditioner from '../Images/ProductImages/conditioner.jpeg'
import charcoal from '../Images/ProductImages/activatedcharcoal.jpeg'
import nightLotion from '../Images/ProductImages/nighttimelotion.jpeg'
import dayLotion from '../Images/ProductImages/daytimelotion.jpeg'
import coffee from '../Images/ProductImages/coffeewalnut.jpeg'
import suncream from '../Images/ProductImages/sunshield.jpeg'
import antiBlemish from '../Images/ProductImages/pigmentcontrol.jpeg'
import spotcorrecting from '../Images/ProductImages/spotcorrectingantiacne.jpeg'
import sandalwood from '../Images/ProductImages/sandalwood.jpeg'
import skintoner from '../Images/ProductImages/skintoner.jpeg'
import waralasa from '../Images/ProductImages/waralasa.jpeg'
import facialcleanser from '../Images/ProductImages/facialcleanser.jpeg'
import bodymoisture from '../Images/ProductImages/everbodymoisture.jpeg'
import tumeric2 from '../Images/ProductImages/tumeric2.webp'
import tumeric3 from '../Images/ProductImages/tumeric3.webp'
import antiblemish2 from '../Images/ProductImages/pigmentcontrol2.webp'
import antiblemish3 from '../Images/ProductImages/blemish3.webp';
import daycream2 from '../Images/ProductImages/brightningdaycream.webp';
import nightcream2 from '../Images/ProductImages/nightcream2.webp';
import mint2 from '../Images/ProductImages/mint2.webp'

export interface Product{
    id:number;
    name:string;
    desc:string;
    price:number;
    image:string;
    additionalImgaes:string[];
}

export const products:Product[]=[
    {
        id:1,
        name:"Rose T and Aloevera Body Lotion",
        desc:"Enriched with the essence of rose tea and the soothing properties of aloe vera, this luxurious formula provides hydration and nourishment to your skin, leaving it feeling smooth and rejuvenated",
        price:690,
        image:roseT,
        additionalImgaes:[roseT,roseT,roseT]
    },
    {
        id:2,
        name:"Rejuvenating and Brightning Night Cream",
        desc:"Then, indulge in the luxurious nourishment of our Night Cream, enriched with potent ingredients to replenish and rejuvenate your skin as you sleep",
        price:2850,
        image:nightcream,
        additionalImgaes:[nightcream2]
    },
    {
        id:3,
        name:"Radiant & Protective Day Cream",
        desc:"Start your day with our hydrating and protective Day Cream,formulated to provide lightweight moisture and shield your skin from environmental stressors.",
        price:2800,
        image:daycream,
        additionalImgaes:[daycream2]
    },
    {
        id:4,
        name:"Golden Radiance Tumeric Cream",
        desc:"Our Golden Radiance Gold Turmeric Cream – a true testament to the fusion of ancient wisdom and modern skincare innovation. This multifaceted cream is meticulously crafted to address a variety of skincare concerns while embracing the rich heritage of Ayurveda.",
        price:2900,
        image:tumeric,
        additionalImgaes:[tumeric2,tumeric3]
    },
    {
        id:5,
        name:"Radiant & Protective Brightening Daytime Body Lotion",
        desc:"During the day, indulge in our Radiant & Protective Brightening Daytime Body Lotion. Lightweight and fast absorbing, this soft and smooth lotion is enriched with vitamin E and castor oil to nourish and protect your skin throughout the day",
        price:3150,
        image:dayLotion,
        additionalImgaes:[dayLotion,dayLotion]
    },
    {
        id:6,
        name:"Radiant & Protective Brightening Night time Body Lotion",
        desc:"A luxurious blend infused with bee honey and vitamin A to deeply nourish and revitalize your skin while you sleep. This advanced formula goes beyond moisturization, working to even out skin tone and promote a radiant complexion.",
        price:3300,
        image:nightLotion,
        additionalImgaes:[nightLotion,nightLotion]
    },
    {
        id:7,
        name:"Golden Radiance Fairness Face Wash",
        desc:"Infused with 24-carat gold dust, this luxurious formula gently removes dead skin and dark spots, leaving skin fresh and vibrant. Restore your natural complexion, even out skin tone, and eliminate dullness with every wash.",
        price:600,
        image:facewash,
        additionalImgaes:[facewash,facewash]
    },
    {
        id:8,
        name:"PIMPLE CLEAR ANTI- ACNE MINT FACE WASH",
        desc:"Infused with the purifying properties of neem, tea tree, and salicylic acid, this refreshing formula deeply cleanses pores, freeing them from dirt and impurities. Say goodbye to acne as it gently removes blackheads and whiteheads, revealing a smoother, blemish-free complexion with every use.",
        price:600,
        image:mintantiAcne,
        additionalImgaes:[mint2,]
    },
    {
        id:9,
        name:"SMOOTH EXFOLIATING COFFEE & WALNUT FACIAL SCRUB",
        desc:"Infused with special ingredients like hyaluronic acid, walnut shell powder, coffee powder, green tea extract, and glycolic acid. Experience a revitalizing exfoliation with natural, skinloving ingredients.",
        price:1699,
        image:coffee,
        additionalImgaes:[coffee,coffee]
    },
    {
        id:10,
        name:"BRIGHTENING & REJUVINATING ACTIVATED CHARCOAL PACK",
        desc:"Formulated with hyaluronic acid, glycolic acid, and vitamin E to nourish and rejuvenate. Achieve a brighter complexion and revitalized skin with the purifying power of activated charcoal.",
        price:1600,
        image:charcoal,
        additionalImgaes:[charcoal,charcoal]
    },
    {
        id:11,
        name:"Gentle Rejuvenating Facial Cleanser",
        desc:"Our skin cleanser is a deep cleanse that purifies your skin, removing impurities, excess oil, and makeup residue without stripping away essential moisture. Formulated with gentle yet effective ingredients, it leaves your skin feeling refreshed, balanced, and ready to absorb the benefits of your skincare routine.",
        price:690,
        image:facialcleanser,
        additionalImgaes:[facialcleanser,facialcleanser]
    },
    {
        id:12,
        name:"SHIELDING 2 IN 1 SUNCREAM",
        desc:"This SPF 50 sunscreen provides superior sun control while keeping your skin moisturized throughout the day. Protecting against harmful UV rays, it not only prevents sunburn but also shields your skin from premature aging. Our shielding sun cream is your trusted companion for radiant and healthy skin under the sun.",
        price:1100,
        image:suncream,
        additionalImgaes:[suncream,suncream]
    },
    {
        id:13,
        name:"ANTI-BLEMISH PIGMENTATION CONTROL CREAM",
        desc:"This SPF 50 sunscreen provides superior sun control while keeping your skin moisturized throughout the day. Protecting against harmful UV rays, it not only prevents sunburn but also shields your skin from premature aging. Our shielding sun cream is your trusted companion for radiant and healthy skin under the sun.",
        price:3850,
        image:antiBlemish,
        additionalImgaes:[antiblemish2, antiblemish3]
    },
    {
        id:14,
        name:"Revive & Radiance Hair Elixir Shampoo",
        desc:"Crafted with a harmonious blend of natural extracts to nourish and revitalize your hair. Enriched with virgin coconut oil, Bhringraj extract, Shikakai extract, and soothing Aloe extract, this formula gently cleanses while providing deep hydration and strengthening benefits. Experience the luxurious lather and invigorating scent as it leaves your hair feeling soft, silky, and refreshed after each wash.",
        price:740,
        image:shampoo,
        additionalImgaes:[shampoo,shampoo]
    },
    {
        id:15,
        name:"Revive & Radiance Hair Elixir Conditioner",
        desc:"ntroducing our luxurious conditioner, infused with a nourishing blend of premium ingredients to pamper your hair. Enriched with B165, Xiameter 1785, hydrolyzed silk protein, and virgin coconut oil, this formula provides intense hydration and strengthens each strand from within. Experience the silky-smooth texture and the irresistible shine as it detangles and softens your hair, leaving it looking and feeling healthier than ever before.",
        price:740,
        image:conditioner,
        additionalImgaes:[conditioner,conditioner]
    },
    {
        id:16,
        name:"7 Herbs Hair Oil",
        desc:"Enriched with the essence of seven powerful herbs including hringraj, Amla, and Neem, this exquisite formula penetrates deep into the roots, nourishing and strengthening each strand from withinBid farewell to dryness, breakage, and dullness as this lightweight elixir replenishes moisture, promotes healthy growth, and adds a radiant shine to your locks.",
        price:690,
        image:waralasa,
        additionalImgaes:[waralasa,waralasa]
    },
    {
        id:17,
        name:"Sandalwood Day and Night Cream",
        desc:"Enriched with the timeless essence of sandalwood, this indulgent formula provides essential hydration and protection during the day, while working overnight to repair and replenish, leaving your skin soft, supple, and radiant.",
        price:690,
        image:sandalwood,
        additionalImgaes:[sandalwood,sandalwood]
    },
    {
        id:18,
        name:"Spot Correcting Anti Acne Cream",
        desc:"Formulated with potent ingredients like encapsulated sulfur and salicylic acid, this cream targets acne at its source, effectively reducing blemishes and preventing future breakouts. It's time to sabotage the breakout cycle and reveal your best skin yet.",
        price:1100,
        image:spotcorrecting,
        additionalImgaes:[spotcorrecting,spotcorrecting]
    },
    {
        id:19,
        name:"Hydrating Everyday Body Moisturizer",
        desc:"",
        price:1200,
        image:bodymoisture,
        additionalImgaes:[bodymoisture,bodymoisture]
    },
    {
        id:20,
        name:"Refreshing Skin Toner",
        desc:"Our toner is the essential second step in your skincare regimen, designed to rebalance your skin's pH levels, tighten pores, and refine texture. Enriched with skin-loving botanical extracts and hydrating agents, it preps your skin to receive the full benefits of your serums and moisturizers while providing a refreshing boost of hydration.",
        price:490,
        image:skintoner,
        additionalImgaes:[skintoner,skintoner]
    }
]
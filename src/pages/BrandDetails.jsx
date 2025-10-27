import { useParams, Link } from "react-router-dom";
export default function BrandDetail() {
  const { category } = useParams();
  const brandCategory = {
    chanel: [
      {
        id: 1,
        name: "Ivory Tweed A-Line Skirt",
        price: "2,850",
        discount: "2,400",
        image:
          "https://imgs.search.brave.com/OUUIGEoVzrmJZUE7liJWUn9o2z200bI68InKDZff2dU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5zdHlsZS5jb20v/dGhtYi9za3pha19x/T3VRZDNGMTZqOW1y/b092LXBCams9LzE1/MDB4MC9maWx0ZXJz/Om5vX3Vwc2NhbGUo/KTptYXhfYnl0ZXMo/MTUwMDAwKTpzdHJp/cF9pY2MoKS9nZXR0/eWltYWdlcy05Njc2/NDM5NzYtMjAwMC1h/NDI2YzdhODZjMmU0/OGE2YWUzYTVmYjlm/YTViMDE0ZC5qcGc",
        desc: "Classic knee-length tweed skirt with metallic threads and signature button details.",
      },
      {
        id: 2,
        name: "Embellished Tweed Midi Dress with Pearl Details",
        price: "8,500",
        discount: "7,200",
        image:
          "https://media.gettyimages.com/id/2196371278/photo/paris-france-a-model-walks-the-runway-during-the-chanel-haute-couture-spring-summer-2025-show.jpg?s=612x612&w=0&k=20&c=sESjKv44-L8Y0wLSd1F0Pa-0LzmpvPNMEUNZeJZDC7s=",
        desc: "Spring 2025 runway piece with hand-sewn pearls and structured silhouette.",
      },
      {
        id: 3,
        name: "Black Sequined Halter Gown with Feather Trim",
        price: "12,900",
        discount: "10,800",
        image:
          "https://media.gettyimages.com/id/2196347212/photo/paris-france-kylie-jenner-attends-the-chanel-haute-couture-spring-summer-2025-show-as-part-of.jpg?s=612x612&w=0&k=20&c=hZ9dAXyDh9Cz26JA3Ef3vo_rEg50Xjoidi0n8fIfIg4=",
        desc: "Glamorous sequined gown with halter neckline and feather hem detailing.",
      },
      {
        id: 4,
        name: "Pale White Chiffon Cape Dress with Gold Accents",
        price: "9,750",
        discount: "8,100",
        image:
          "https://assets.vogue.com/photos/6810e98e3cf217b40624cb64/master/w_1280,c_limit/00001-chanel-resort-2026-credit-gorunway.jpg",
        desc: "Ethereal chiffon dress with attached cape and gold embroidered accents.",
      },
      {
        id: 5,
        name: "White Linen Suit with Contrast Trim Blazer",
        price: "6,200",
        discount: "5,300",
        image:
          "https://media.gettyimages.com/id/1954663614/photo/paris-france-a-model-walks-the-runway-during-the-chanel-haute-couture-spring-summer-2024-show.jpg?s=612x612&w=0&k=20&c=z7WjNgtMq_axTrDgFkJ1Bh5zyaCtcxn38GS8hzH-lE0=",
        desc: "Crisp white linen suit with black contrast trim and tailored fit.",
      },
      {
        id: 6,
        name: "Navy Velvet Column Gown with Crystal Brooch",
        price: "11,400",
        discount: "9,600",
        image:
          "https://media.gettyimages.com/id/2224068261/photo/paris-france-marion-cotillard-attends-the-chanel-haute-couture-fall-winter-2025-2026-show-as.jpg?s=612x612&w=0&k=20&c=4zreWeb5jxAKXgE17MaEPJNAEuvyvv29gdyeOhECgQw=",
        desc: "Sleek velvet column gown with statement crystal-encrusted brooch.",
      },
      {
        id: 7,
        name: "Pastel Tweed Mini Dress with Chain Belt",
        price: "4,950",
        discount: "4,200",
        image:
          "https://media.gettyimages.com/id/2196360607/photo/paris-france-jennie-kim-attends-the-chanel-haute-couture-spring-summer-2025-show-as-part-of.jpg?s=612x612&w=0&k=20&c=66wt7PYfjnJ0cqSUWobg86IBJ5Mt78BlCOAKuRnpTxY=",
        desc: "Playful pastel tweed mini with signature CC chain belt.",
      },
      {
        id: 8,
        name: "Emerald Satin Slip Dress with Jeweled Straps",
        price: "7,800",
        discount: "6,500",
        image:
          "https://media.gettyimages.com/id/2196354754/photo/paris-france-dua-lipa-attends-the-chanel-haute-couture-spring-summer-2025-show-as-part-of.jpg?s=612x612&w=0&k=20&c=saBKYbsdEAa7e2kcKTOJ4OInx3DLKW6Yi1TEl2T7khY=",
        desc: "Bias-cut emerald satin slip with crystal-embellished straps.",
      },
    ],
    dior: [
      {
        id: 9,
        name: "Pleated Tulle Midi Skirt with Pearl Trim",
        price: "4,200",
        discount: "3,550",
        image:
          "https://media.gettyimages.com/id/1952520010/photo/paris-france-rihanna-attends-the-christian-dior-haute-couture-spring-summer-2024-show-as-part.jpg?s=612x612&w=0&k=20&c=pkqEStoRHgZiqqU-sIk5sgHKqlED5zfuGWuaJgCBn6Q=",
        desc: "Romantic tulle midi skirt with delicate pearl trim and soft pleating.",
      },
      {
        id: 10,
        name: "Embroidered Silk Blazer with Structured Shoulders",
        price: "6,800",
        discount: "5,780",
        image:
          "https://media.gettyimages.com/id/1952614854/photo/paris-france-anya-taylor-joy-attends-the-christian-dior-haute-couture-spring-summer-2024-show.jpg?s=612x612&w=0&k=20&c=YVZlUVUCe5BNfstD3wvQgU2I_RiFJIfRgBDA1vyVCwE=",
        desc: "Luxurious silk blazer featuring intricate embroidery and strong shoulder lines.",
      },
      {
        id: 11,
        name: "Floral Jacquard A-Line Dress with V-Neck",
        price: "5,400",
        discount: "4,590",
        image:
          "https://media.gettyimages.com/id/1953444223/photo/paris-france-a-model-walks-the-runway-during-the-christian-dior-haute-couture-spring-summer.jpg?s=612x612&w=0&k=20&c=awgoCzkUflbeGrVlz5xskJM3eXPrIU8r1tfzYcR-B48=",
        desc: "Elegant floral jacquard dress with flattering A-line silhouette and V-neckline.",
      },
      {
        id: 12,
        name: "Black Satin Column Gown with Crystal Straps",
        price: "8,900",
        discount: "7,565",
        image:
          "https://media.gettyimages.com/id/1952401500/photo/paris-france-carla-bruni-attends-the-dior-haute-couture-show-during-paris-fashion-week-spring.jpg?s=612x612&w=0&k=20&c=PuZVVs0vSp4GnESW2dwZ_7f0lsdjN5MLn6aBbSl5j4E=",
        desc: "Sleek black satin gown with crystal-embellished shoulder straps.",
      },
      {
        id: 13,
        name: "Linen Shirt Dress with Contrasting Belt",
        price: "3,700",
        discount: "3,145",
        image:
          "https://media.gettyimages.com/id/2158486275/photo/jennifer-lopez-at-christian-dior-fall-2024-couture-show-at-christian-dior-haute-couture-fall.jpg?s=612x612&w=0&k=20&c=j0hciMqWOa6hHlGRS8bLkqeMlBRrgg58v1m4VGi5H1M=",
        desc: "Crisp linen shirt dress with contrasting waist belt and relaxed fit.",
      },
      {
        id: 14,
        name: "Beaded Chiffon Gown with Cape Overlay",
        price: "12,500",
        discount: "10,625",
        image:
          "https://media.gettyimages.com/id/1952384386/photo/paris-france-heart-evangelista-attends-the-christian-dior-haute-couture-spring-summer-2024.jpg?s=612x612&w=0&k=20&c=949C4FaOhMCfV9RVgnpRTed8Hsmr0eWRwJTBXY932Po=",
        desc: "Ethereal beaded chiffon gown with dramatic cape overlay detail.",
      },
      {
        id: 15,
        name: "Haute Rouge Coat Gown",
        price: "5,900",
        discount: "5,015",
        image:
          "https://imgs.search.brave.com/go6HkBUlXH4q3kG7gJWS7U-TVzIBQ6tAyMHAt7tug80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c3BvdHRlZC1hdC10/aGUtY2hyaXN0aWFu/LWRpb3ItZncyNC1z/aG93LWF0LXBhcmlz/LWZhc2hpb24tdjAt/eXZpd3JjOXg4N2xj/MS5wbmc_d2lkdGg9/MTI4MyZmb3JtYXQ9/cG5nJmF1dG89d2Vi/cCZzPTgxNmM0YjAw/NGJhMjFlM2EwYzg1/YTMxMjJkYzU0NzFk/YWNlYWNkMWQ",
        desc: "Classic tweed set with cropped jacket and matching skirt with gold accents.",
      },
      {
        id: 16,
        name: "Velvet Halter Gown with Open Back",
        price: "7,800",
        discount: "6,630",
        image:
          "https://media.gettyimages.com/id/2159019445/photo/paris-france-deva-cassel-attends-the-christian-dior-haute-couture-fall-winter-2024-2025-show.jpg?s=612x612&w=0&k=20&c=rSEuWghJSPKy3bmgtbCfC7zOecEtzWf-T8vVkz96xzU=",
        desc: "Dramatic velvet halter gown with elegant open back design.",
      },
    ],
    gucci: [
      {
        id: 17,
        name: "Sequined Mini Dress with Fringe Details",
        price: "3,200",
        discount: "2,700",
        image:
          "https://media.gettyimages.com/id/2236966236/photo/milan-italy-alex-consani-attends-the-gucci-spring-summer-2026-red-carpet-during-the-milan.jpg?s=612x612&w=0&k=20&c=aUiILElJqO7sb2YtUTWUTVz07jhsj1gLhpyITBUZj5c=",
        desc: "Glamorous sequined mini with playful fringe detailing and modern silhouette.",
      },
      {
        id: 18,
        name: "Oversized Leather Blazer with Peaked Lapels",
        price: "4,100",
        discount: "3,500",
        image:
          "https://media.gettyimages.com/id/2236511309/photo/demi-moore-at-the-gucci-fashion-show-as-part-of-spring-summer-2026-milan-fashion-week-held-at.jpg?s=612x612&w=0&k=20&c=4HfaiQZCAUgNO64BhUlAGeeRssWgxWJFvbrbDXri1qI=",
        desc: "Bold oversized blazer in supple leather with sharp peaked lapels.",
      },
      {
        id: 19,
        name: "Floor-Length Satin Gown with Bow Accent",
        price: "6,500",
        discount: "5,500",
        image:
          "https://media.gettyimages.com/id/2236960430/photo/milan-italy-gwyneth-paltrow-attends-the-gucci-spring-summer-2026-red-carpet-during-the-milan.jpg?s=612x612&w=0&k=20&c=qes7grmTNv7AZQRU8lQmtFNgCJs9RumfqGlHG8_YpoU=",
        desc: "Luxurious floor-length gown in lustrous satin with dramatic bow detail.",
      },
      {
        id: 20,
        name: "Beaded Cocktail Dress with Sheer Overlay",
        price: "4,800",
        discount: "4,100",
        image:
          "https://assets.vogue.com/photos/67befe8854b1d84aed53532d/master/w_1920,c_limit/00004-gucci-fall-2025-ready-to-wear-credit-brand.jpg",
        desc: "Intricate beaded dress with delicate sheer overlay and vintage glamour.",
      },
      {
        id: 21,
        name: "Pinstripe Tailored Suit Set",
        price: "3,750",
        discount: "3,200",
        image:
          "https://media.gettyimages.com/id/2201927872/photo/milan-italy-a-model-walks-the-runway-at-the-gucci-womens-fall-winter-2025-2026-fashion-show.jpg?s=612x612&w=0&k=20&c=pue9RfjdBvc_umlcvXgh8_YzycHUXOPeOKKjdXlNDbE=",
        desc: "Sharp pinstripe suit with tailored blazer and matching wide-leg trousers.",
      },
      {
        id: 22,
        name: "Embroidered Wool Coat with Fur Sleeves",
        price: "7,200",
        discount: "6,100",
        image:
          "https://media.gettyimages.com/id/2236951066/photo/milan-italy-akolde-meen-attends-the-gucci-spring-summer-2026-event-during-the-milan-fashion.jpg?s=612x612&w=0&k=20&c=1EYPvc0-COY2znFC6lIWZMIpryycn10T8euAUmSKeR0=",
        desc: "Statement wool coat with intricate embroidery and luxe fur sleeve detailing.",
      },
      {
        id: 23,
        name: "Tiered Organza Midi Dress with Ruffles",
        price: "4,400",
        discount: "3,750",
        image:
          "https://media.gettyimages.com/id/1683285629/photo/model-on-the-runway-at-the-gucci-spring-2024-ready-to-wear-fashion-show-on-september-22-2023.jpg?s=612x612&w=0&k=20&c=S6h7lY044CJcyphh2t7MYr_xINd7AKxD5uowgu5NrXU=",
        desc: "Romantic tiered dress in soft organza with cascading ruffle layers.",
      },
      {
        id: 24,
        name: "Belted Suede Trench Coat with Wide Collar",
        price: "5,900",
        discount: "5,000",
        image:
          "https://media.gettyimages.com/id/2201325913/photo/model-on-the-runway-at-the-gucci-fall-rtw-2025-fashion-show-as-part-of-milan-fashion-week.jpg?s=612x612&w=0&k=20&c=mT95TefA6TPVWR7UmSB8CdOyuRjBnFQDltHZlX4XUWQ=",
        desc: "Classic trench reimagined in soft suede with wide collar and cinched waist.",
      },
    ],
    lv: [
      {
        id: 25,
        name: "Monogram Canvas Mini Skirt with Chain Detail",
        price: "3,200",
        discount: "2,700",
        image:
          "https://media.gettyimages.com/id/2154349807/photo/barcelona-spain-a-model-walks-the-runway-during-louis-vuitton-womenswear-cruise-2025-at-park.jpg?s=612x612&w=0&k=20&c=lLuwMaHXhi2EbBnrj4IeZFDxC6aPvukU7fZm7Vs5grs=",
        desc: "Iconic monogram canvas mini with signature chain embellishment.",
      },
      {
        id: 26,
        name: "Structured Leather Jacket with Quilted Panels",
        price: "5,800",
        discount: "4,900",
        image:
          "https://media.gettyimages.com/id/1713411235/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-spring-summer-2024.jpg?s=612x612&w=0&k=20&c=EdVmQ_AilhDM-vO7_jph0CbwOwZVUNdH3ug0hXPg208=",
        desc: "Bold leather jacket featuring quilted panels and architectural structure.",
      },
      {
        id: 27,
        name: "Brocade Evening Gown with Dramatic Sleeves",
        price: "7,400",
        discount: "6,300",
        image:
          "https://media.gettyimages.com/id/1713405228/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-spring-summer-2024.jpg?s=612x612&w=0&k=20&c=mo_9OmpuCAyQHikfXqVRhfEPMWl3IX3qTjH62zJm4dQ=",
        desc: "Luxurious brocade gown with voluminous statement sleeves.",
      },
      {
        id: 28,
        name: "Tailored Wool Suit with Monogram Lining",
        price: "4,600",
        discount: "3,900",
        image:
          "https://media.gettyimages.com/id/2204599864/photo/paris-france-felix-walks-the-runway-during-the-louis-vuitton-womenswear-fall-winter-2025-2026.jpg?s=612x612&w=0&k=20&c=Js5R6bQOWT89BBxDyjoMhNYWwJF2frbkzDMagx2930c=",
        desc: "Impeccably tailored wool suit with hidden monogram lining detail.",
      },
      {
        id: 29,
        name: "Printed Silk Shirt Dress with Tie Waist",
        price: "3,900",
        discount: "3,300",
        image:
          "https://media.gettyimages.com/id/1713414169/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-spring-summer-2024.jpg?s=612x612&w=0&k=20&c=f1jWckeYs4CMpXRaFXTWRZQn_YlIguW2O8m58YdvlRQ=",
        desc: "Flowing silk shirt dress with vibrant print and tie waist detail.",
      },
      {
        id: 30,
        name: "Beaded Tulle Gown with Illusion Neckline",
        price: "9,200",
        discount: "7,800",
        image:
          "https://media.gettyimages.com/id/2238280180/photo/paris-france-julia-saner-walks-the-runway-during-the-louis-vuitton-womenswear-spring-summer.jpg?s=612x612&w=0&k=20&c=MX5TXu1Jwyr5r8UI0pF1gx50kDBCxDx6dyZY8XoZPRc=",
        desc: "Ethereal beaded tulle gown with delicate illusion neckline.",
      },
      {
        id: 31,
        name: "Geometric Print Dress with Cut-Out Back",
        price: "4,100",
        discount: "3,500",
        image:
          "https://media.gettyimages.com/id/2204599557/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=zqICCaVWwEDTsiKkYW0eKqyOeiP_abNeAWinC5hbPFQ=",
        desc: "Contemporary dress with bold geometric print and unexpected back cutout.",
      },
      {
        id: 32,
        name: "Double-Breasted Trench Coat with Logo Hardware",
        price: "6,500",
        discount: "5,500",
        image:
          "https://media.gettyimages.com/id/2204599530/photo/paris-france-a-model-walks-the-runway-during-the-louis-vuitton-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=w9Rd6wR2Df6fLqUt_CewkwLaBLwe6qDxJMrbfXs75ag=",
        desc: "Classic trench reimagined with signature logo hardware and modern cut.",
      },
    ],
    ysl: [
      {
        id: 33,
        name: "Black Leather Mini Skirt with Pleats",
        price: "2,400",
        discount: "2,050",
        image:
          "https://media.gettyimages.com/id/2204619892/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=zED7jpjcKDWVPpcTjl-nBgW1V_yi0gluWbEL0Qk48kY=",
        desc: "Edgy pleated mini skirt in supple black leather with modern edge.",
      },
      {
        id: 34,
        name: "Sheer Lace Bodysuit with Tailored Blazer",
        price: "5,200",
        discount: "4,400",
        image:
          "https://media.gettyimages.com/id/2238191764/photo/paris-france-bella-hadid-walks-the-runway-during-the-saint-laurent-womenswear-spring-summer.jpg?s=612x612&w=0&k=20&c=HH6LVCbtKedz3YTn0GtEGgs7PjLG5giWhTV2IAkKAtw=",
        desc: "Daring sheer lace bodysuit paired with sharp tailored blazer.",
      },
      {
        id: 35,
        name: "Velvet Tuxedo Dress with Satin Lapels",
        price: "4,900",
        discount: "4,150",
        image:
          "https://media.gettyimages.com/id/2204619826/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=Dmck2tjBf9O9J5CLFSsfWzZBSaKu8n_61JkeMFHUD00=",
        desc: "Sophisticated tuxedo dress in rich velvet with glossy satin lapels.",
      },
      {
        id: 36,
        name: "Metallic Midi Skirt with Asymmetric Hem",
        price: "3,600",
        discount: "3,050",
        image:
          "https://media.gettyimages.com/id/2204619855/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=mM9VO6tEM730AEo-TGvdPRAm5zPmBhHTlUz66MRtdcE=",
        desc: "Eye-catching metallic midi with dramatic asymmetric hemline.",
      },
      {
        id: 37,
        name: "Silk Slip Dress with Cowl Neckline",
        price: "3,100",
        discount: "2,650",
        image:
          "https://media.gettyimages.com/id/2204619778/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=q3exRen14vfduefbhNNDjHszUcRNZ_vaP7SQHEhEtBk=",
        desc: "Elegant silk slip with flowing cowl neckline and minimalist design.",
      },
      {
        id: 38,
        name: "Sequined Column Gown with Train",
        price: "8,200",
        discount: "6,950",
        image:
          "https://media.gettyimages.com/id/2204620085/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=HhM43urSq652Q8KnkPQAhOp0U1kFJe-ehuhcQNEsUmE=",
        desc: "Show-stopping sequined gown with dramatic floor-length train.",
      },
      {
        id: 39,
        name: "Striped Knit Co-ord Set with Cutouts",
        price: "2,850",
        discount: "2,400",
        image:
          "https://media.gettyimages.com/id/2204620023/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-fall-winter-2025.jpg?s=612x612&w=0&k=20&c=zgUrFQR4RPUj2MfC9OObxqDQEbIByJdQ8UaaXDIIJus=",
        desc: "Contemporary striped knit set with strategic cutout detailing.",
      },
      {
        id: 40,
        name: "Patent Leather Trench with Wide Belt",
        price: "6,400",
        discount: "5,450",
        image:
          "https://media.gettyimages.com/id/2174268448/photo/paris-france-a-model-walks-the-runway-during-the-saint-laurent-womenswear-spring-summer-2025.jpg?s=612x612&w=0&k=20&c=l1xaqmphBCHET0gS3CJ0zNIyH9yaP6DFESox479emd0=",
        desc: "Striking patent leather trench with cinched waist and bold silhouette.",
      },
    ],
  };
  const brandDisplayNames = {
    chanel: "Chanel",
    dior: "Dior",
    gucci: "Gucci",
    lv: "Louis Vuitton",
    ysl: "Yves Saint Laurent",
  };

  const product = brandCategory[category] || [];
  const brandName = category;
  const displayName = brandDisplayNames[brandName] || brandName;
  return (
    <div className="flex flex-col items-center">
      <div
        data-aos="fade-right"
        className="pt-10 flex justify-center items-center"
      >
        <Link
          className="text-3xl lg:text-5xl animate-pulse uppercase font-semibold font-josefinsans"
          to={"/"}
        >
          {displayName}
        </Link>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 px-4">
        {product.map((p) => (
          <div data-aos="zoom-in" key={p.id} className="flex justify-center">
            <Link to={`/product/${p.id}`} className="group h-full">
              <div className="bg-white rounded-[3px] shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col w-full max-w-[250px] h-full">
                <div className="bg-white overflow-hidden max-h-full mx-auto">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-bold mb-2 line-clamp-2">
                      {p.name}
                    </h2>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {p.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-red-600">
                      ${p.discount}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${p.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturedAuthors() {
  const FeaturedAuthors = [
    {
      Name: "Amish Tripathi",
      Books:
        "He is known for his books Shiva Trilogy (The Immortals of Meluha, The Secret of the Nagas, The Oath of the Vayuputras), Ram Chandra Series (Scion of Ikshvaku, Sita: Warrior of Mithila, Raavan: Enemy of Aryavarta) and Legend of Suheldev: The King Who Saved India.",
      icon:
        "https://cms.qz.com/wp-content/uploads/2019/08/amish-e1566788994155.jpg?quality=75&strip=all&w=1600&h=900&crop=1",
      nation: "India"
    },
    {
      Name: "Chetan Bhagat",
      Books:
        "Five of Chetan Bhagat's novels have been adapted into Bollywood films like Hello in 2008 (based on One Night @ the Call Center), 3 Idiots in 2009 (based on Five Point Someone), Kai Po Che! in 2013 (based on The 3 Mistakes of My Life); 2 States in 2014 (based on his novel of the same name) and Half Girlfriend in 2017 (based on his novel of the same name). Bhagat has also written the scripts for Bollywood films like Kick in 2014 and adapted his stories for the movies Kai Po Che! and Half Girlfriend.[5] Bhagat won the Filmfare Award for Best Screenplay for Kai Po Che! at the 59th Filmfare Awards in 2014",
      icon:
        "https://images.fridaymagazine.ae/1_2169687/imagesList_0/1772963257_main.jpg",
      nation: "India"
    },
    {
      Name: "Durjoy Datta",
      Books: [
        "Of Course I Love You..!...Till I Find Someone Better (co-author Maanvi Ahuja) (2008)",
        "Now That You're Rich.!. Lets Fall in Love!",
        "SHE BROKE UP I DIDN'T! ... I Just Kissed Someone Else!",
        "Ohh Yes, I'm Single..! And So is My Girlfriend!",
        "The Backbenchers series (contributor)",
        "You Were My Crush! ... till you said you love me! ",
        "If It's Not Forever ... It's Not Love"
      ],
      icon:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/DurjoyDatta.jpg",
      nation: "India"
    },
    {
      Name: "Sudha Murty",
      Books: [
        "The Mother I Never Knew",
        "Three Thousand Stitches",
        "The Man from the Egg",
        "Here, There, Everywhere",
        "Magic of the Lost Temple",
        "Grandma's Bag of Stories 1",
        "Grandma's Bag of Stories 2"
      ],
      icon: "https://images.indianexpress.com/2019/12/sudha-murthy-1.jpg",
      nation: "India"
    },
    {
      Name: "Ashwin Sanghi",
      Books: [
        "The Rozabal Line: First published under the anagram Shawn Haigins",
        "Chanakya's Chant",
        "The Krishna Key",
        "Private India"
      ],
      icon:
        "https://www.forbesindia.com/media/images/2017/Feb/img_93509_ashwinsanghi_01_jn_big.jpg",
      nation: "India"
    },
    {
      Name: "Khalid Hussain",
      Books: ["Pakkis", "Evil Landscape"],
      icon: "https://images.gr-assets.com/authors/1359753468p4/569.jpg",
      nation: "Pakistan"
    },
    {
      Name: "Stephan King",
      nation: "America",
      Books: [
        "The Rozabal Line: First published under the anagram Shawn Haigins",
        "Chanakya's Chant",
        "The Krishna Key",
        "Private India"
      ],
      icon:
        "data:image/jpeg;base64,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"
    },
    {
      Name: "Robin Sharma",
      nation: "Canadian",
      Books: [
        "The Monk Who Sold His Ferrari",
        "Megaliving!: 30 Days to a Perfect Life",
        "The Saint, the Surfer, and the CEO",
        "The Leader Who Had No Title"
      ],
      icon: "https://optimizehq.imgix.net/authors/headshots/robin-sharma.jpg"
    },
    {
      Name: "Dan Brown",
      Books: ["Digital Fortress", "Deception Point", "Wild Symphony"],
      icon:
        "https://i.guim.co.uk/img/media/adb81d8dde35e9acdbb37a6d39c2725ba01c5379/328_278_4497_2698/master/4497.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f6d97defc0bc3a3ea7f081f2b440374f",
      nation: "America"
    },
    {
      Name: "Walter Isaacson",
      Books: [
        "Steve Jobs",
        "Einstein: His Life and Universe",
        "Benjamin Franklin: An American Life",
        "The Innovators: How a Group of Inventors, Hackers, Geniuses, and Geeks Created the Digital Revolution",
        "Leonardo Da Vinci."
      ],
      icon:
        "https://www.rockefellerfoundation.org/wp-content/uploads/Walter-Isaacson-Square-Cropped.jpg",
      nation: "America"
    }
  ];

  const FeaturedSeries = [
    {
      name: "A Song of Ice and Fire",
      titleSrc: "https://i.ytimg.com/vi/hgeFcSKf5Vw/hqdefault.jpg"
    },
    {
      name: " Harry Potter",
      titleSrc:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Harry-film-logo.png/250px-Harry-film-logo.png"
    },
    {
      name: "Lord of the Rings",
      titleSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Lotr_logos.png/330px-Lotr_logos.png"
    },
    {
      name: "Shiva Triology",
      titleSrc:
        "https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/shiva-trilogy.jpg"
    },
    {
      name: "Six of Crows",
      titleSrc: "https://m.media-amazon.com/images/I/51J5zgGCRPL.jpg"
    }
  ];

  return (
    <div>
      <h1> Featured India Authors </h1>
      <ul className="img-group">
        {FeaturedAuthors.map((obj) => {
          return (
            obj.nation === "India" && (
              <li className="list list-group-item">
                <img className="circle" alt="loading" src={obj.icon} />
              </li>
            )
          );
        })}
      </ul>
      <h1> Featured International Authors </h1>
      <ul className="img-group">
        {FeaturedAuthors.map((obj) => {
          return (
            obj.nation !== "India" && (
              <li className="list list-group-item">
                <img className="circle" alt="loading" src={obj.icon} />
              </li>
            )
          );
        })}
      </ul>
      <h1> Featured Series</h1>
      <ul className="img-group">
        {FeaturedSeries.map((obj) => {
          return (
            <li className="list list-group-item">
              <img className="square" alt="loading" src={obj.titleSrc} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { IFilm } from '../types/film';
import FilmCover1 from './images/the-grand-budapest-hotel-poster.jpg';
import FilmCover2 from './images/fantastic-beasts-the-crimes-of-grindelwald.jpg';
import FilmCover3 from './images/bohemian-rhapsody.jpg';
import FilmCover4 from './images/macbeth.jpg';
import FilmCover5 from './images/aviator.jpg';
import FilmCover6 from './images/we-need-to-talk-about-kevin.jpg';
import FilmCover7 from './images/what-we-do-in-the-shadows.jpg';
import FilmCover8 from './images/revenant.jpg';

export const films: IFilm[] = [
  {
    id: '1',
    title: 'The Grand Budapest Hotel',
    genre: 'Drama',
    date: 2014,
    cover: FilmCover1,
    bigPoster: FilmCover1,
    poster: FilmCover1,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`&apos`s friend and protege. Gustave prides himself on providing first-className service to the hotel`&apos`s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave`&apos`s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    reviews: {
      score: '8,9',
      level: 'Very good',
      list: ['good film', 'nice']
    },
  },
  {
    id: '2',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'Fantasy',
    date: 2018,
    cover: FilmCover2,
    bigPoster: FilmCover2,
    poster: FilmCover2,
    description: 'Fantastic Beasts: The Crimes of Grindelwald is a 2018 fantasy film directed by David Yates and written by J. K. Rowling. The sequel to Fantastic Beasts and Where to Find Them (2016), it is the second instalment in the Fantastic Beasts film series and the tenth overall in the Wizarding World franchise. It features an ensemble cast including Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Zoë Kravitz, Callum Turner, Claudia Kim, William Nadylam, Kevin Guthrie, Jude Law, and Johnny Depp. Set in 1927, it follows Newt Scamander and Albus Dumbledore as they attempt to take down the dark wizard Gellert Grindelwald while facing new threats in a more divided wizarding world.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'David Yates',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    reviews: {
      score: '10',
      level: 'Very good',
      list: ['good film', 'nice']
    },
  },
  {
    id: '3',
    title: 'Bohemian Rhapsody',
    genre: 'Drama',
    date: 2018,
    cover: FilmCover3,
    bigPoster: FilmCover3,
    poster: FilmCover3,
    description: 'Bohemian Rhapsody is a 2018 biographical musical drama film directed by Bryan Singer[a] from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. The film tells the story of the life of Freddie Mercury, the lead singer of the British rock band Queen, from the formation of the band in 1970 up to their 1985 Live Aid performance at the original Wembley Stadium. The film stars Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, and Mike Myers in supporting roles. Queen members Brian May and Roger Taylor also served as consultants on the film. A British-American venture, the film was produced by Regency Enterprises, GK Films and Queen Films, with 20th Century Fox serving as distributor.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'Bryan Singer',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    reviews: {
      score: '7,1',
      level: 'Very good',
      list: ['good film', 'nice']
    },
  },
  {
    id: '4',
    title: 'Macbeth',
    genre: 'History',
    date: 2015,
    cover: FilmCover4,
    bigPoster: FilmCover4,
    poster: FilmCover4,
    description: 'Macbeth is a 2015 epic historical drama film directed by Justin Kurzel and written for the screen by Jacob Koskoff, Todd Louiso and Michael Lesslie, based on William Shakespeares play of the same name.[6] The film stars Michael Fassbender in the title role and Marion Cotillard as Lady Macbeth, with Paddy Considine, Sean Harris, Jack Reynor, Elizabeth Debicki and David Thewlis in supporting roles. The story follows a Scottish generals rise to power after receiving a prophecy from a trio of witches that one day he will become King of Scotland. Like the play it was adapted from, the film dramatises the damaging physical and psychological effects of political ambition on those who seek power for its own sake.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'Justin Kurzel',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe'],
    reviews: {
      score: '9,0',
      level: 'Very good',
      list: ['good film', 'nice']
    },
  },
  {
    id: '5',
    title: 'Aviator',
    genre: 'Drama',
    date: 2004,
    cover: FilmCover5,
    bigPoster: FilmCover5,
    poster: FilmCover5,
    description: 'The Aviator is a 2004 American epic biographical drama film directed by Martin Scorsese and written by John Logan. It stars Leonardo DiCaprio as Howard Hughes, Cate Blanchett as Katharine Hepburn, and Kate Beckinsale as Ava Gardner. The supporting cast features Ian Holm, John C. Reilly, Alec Baldwin, Jude Law, Gwen Stefani, Kelli Garner, Matt Ross, Willem Dafoe, Alan Alda, and Edward Herrmann.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'Martin Scorsese',
    starring: ['Bill Murray', 'Edward Norton', 'Willem Dafoe'],
    reviews: {
      score: '8,9',
      level: 'Very good',
      list: ['good film', 'nice']
    },
  },
  {
    id: '6',
    title: 'We Need to Talk About Kevin',
    genre: 'Detective',
    date: 2010,
    cover: FilmCover6,
    bigPoster: FilmCover6,
    poster: FilmCover6,
    description: 'We Need to Talk About Kevin is a 2003 novel by Lionel Shriver, published by Serpents Tail, about a fictional school massacre. It is written from the first person perspective of the teenage killers mother, Eva Khatchadourian, and documents her attempt to come to terms with her psychopathic son Kevin and the murders he committed, as told in a series of letters from Eva to her husband. The novel, Shrivers seventh, won the 2005 Orange Prize, a UK-based prize for female authors of any country writing in English. In 2011 the novel was adapted into a film.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'Lynne Ramsay',
    starring: ['Bill Murray', 'Jude Law', 'Willem Dafoe'],
    reviews: {
      score: '9,3',
      level: 'Very good',
      list: ['good film', 'nice']
    },
  },
  {
    id: '7',
    title: 'What We Do in the Shadows',
    genre: 'Сomedy',
    date: 2014,
    cover: FilmCover7,
    bigPoster: FilmCover7,
    poster: FilmCover7,
    description: 'What We Do in the Shadows is a 2014 New Zealand mockumentary[3] horror comedy film written and directed by Jemaine Clement and Taika Waititi and the first installment in the What We Do in the Shadows franchise. The film also stars Clement and Waititi, along with Jonathan Brugh, Ben Fransham, Cori Gonzalez-Macuer, Stu Rutherford, and Jackie van Beek. The films plot concerns several vampires who live together in a flat in Wellington.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'Taika Waititi',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law'],
    reviews: {
      score: '9,6',
      level: 'Very good',
      list: ['good film', 'nice']
    },
  },
  {
    id: '8',
    title: 'Revenant',
    genre: 'Drama',
    date: 2015,
    cover: FilmCover8,
    bigPoster: FilmCover8,
    poster: FilmCover8,
    description: 'The Revenant is a 2015 American adventure drama film directed by Alejandro G. Iñárritu. The screenplay by Mark L. Smith and Iñárritu is based in part on Michael Punkes 2002 novel The Revenant, which describes frontiersman Hugh Glass experiences in 1823, and which is based on the 1915 poem The Song of Hugh Glass. The film stars Leonardo DiCaprio and Tom Hardy.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'Alejandro',
    starring: ['Jude Law', 'Willem Dafoe'],
    reviews: {
      score: '9,1',
      level: 'Very good',
      list: ['good film', 'nice']
    },
  },
];

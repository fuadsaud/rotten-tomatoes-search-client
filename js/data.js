(function(movies) {
    App.ApplicationAdapter = DS.FixtureAdapter;

    App.Movie.reopenClass({
        FIXTURES: movies.map(function(m) {
            return {
                id: m.id,
                title: m.title,
                poster: m.posters.thumbnail
            };
        })
    });
})([
    {
    "id": "10015",
    "title": "The Notebook",
    "year": 2004,
    "mpaa_rating": "PG-13",
    "runtime": 124,
    "critics_consensus": "",
    "release_dates": {
        "theater": "2004-06-25",
        "dvd": "2005-02-08"
    },
    "ratings": {
        "critics_rating": "Rotten",
        "critics_score": 52,
        "audience_rating": "Upright",
        "audience_score": 85
    },
    "synopsis": "",
    "posters": {
        "thumbnail": "http://resizing.flixster.com/zdmmFFd4946Ykrlcydg64C1cWa4=/54x74/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/95/11159565_ori.jpg",
        "profile": "http://resizing.flixster.com/zdmmFFd4946Ykrlcydg64C1cWa4=/54x74/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/95/11159565_ori.jpg",
        "detailed": "http://resizing.flixster.com/zdmmFFd4946Ykrlcydg64C1cWa4=/54x74/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/95/11159565_ori.jpg",
        "original": "http://resizing.flixster.com/zdmmFFd4946Ykrlcydg64C1cWa4=/54x74/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/95/11159565_ori.jpg"
    },
    "abridged_cast": [
        {
        "name": "Ryan Gosling",
        "id": "162654751",
        "characters": [
            "Noah"
        ]
    },
    {
        "name": "Rachel McAdams",
        "id": "162652838",
        "characters": [
            "Allie"
        ]
    },
    {
        "name": "James Garner",
        "id": "162657112",
        "characters": [
            "Duke"
        ]
    },
    {
        "name": "Gena Rowlands",
        "id": "162653219",
        "characters": [
            "Allie"
        ]
    },
    {
        "name": "James Marsden",
        "id": "162684857",
        "characters": [
            "Lon Hammond"
        ]
    }
    ],
    "links": {
        "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10015.json",
        "alternate": "http://www.rottentomatoes.com/m/notebook/",
        "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10015/cast.json",
        "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10015/reviews.json",
        "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10015/similar.json"
    }
},
{
    "id": "10093",
    "title": "A Walk to Remember",
    "year": 2002,
    "mpaa_rating": "PG",
    "runtime": 100,
    "critics_consensus": "",
    "release_dates": {
        "theater": "2002-01-25",
        "dvd": "2002-07-09"
    },
    "ratings": {
        "critics_rating": "Rotten",
        "critics_score": 27,
        "audience_rating": "Upright",
        "audience_score": 78
    },
    "synopsis": "",
    "posters": {
        "thumbnail": "http://resizing.flixster.com/Tz7IMBDQDcj4MiTsGY8rCvrce00=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/94/11169452_ori.jpg",
        "profile": "http://resizing.flixster.com/Tz7IMBDQDcj4MiTsGY8rCvrce00=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/94/11169452_ori.jpg",
        "detailed": "http://resizing.flixster.com/Tz7IMBDQDcj4MiTsGY8rCvrce00=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/94/11169452_ori.jpg",
        "original": "http://resizing.flixster.com/Tz7IMBDQDcj4MiTsGY8rCvrce00=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/94/11169452_ori.jpg"
    },
    "abridged_cast": [
        {
        "name": "Shane West",
        "id": "162660098",
        "characters": [
            "Landon Rolands Carter"
        ]
    },
    {
        "name": "Mandy Moore",
        "id": "287254074",
        "characters": [
            "Jamie Elizabeth Sullivan"
        ]
    },
    {
        "name": "Peter Coyote",
        "id": "162663977",
        "characters": [
            "Rev. Sullivan"
        ]
    },
    {
        "name": "Daryl Hannah",
        "id": "162659641",
        "characters": [
            "Cynthia"
        ]
    },
    {
        "name": "Al Thompson",
        "id": "749210734",
        "characters": [
            "Hunter"
        ]
    }
    ],
    "alternate_ids": {
        "imdb": "0281358"
    },
    "links": {
        "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10093.json",
        "alternate": "http://www.rottentomatoes.com/m/walk_to_remember/",
        "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10093/cast.json",
        "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10093/reviews.json",
        "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10093/similar.json"
    }
},
{
    "id": "10180",
    "title": "10 Things I Hate About You",
    "year": 1999,
    "mpaa_rating": "PG-13",
    "runtime": 97,
    "critics_consensus": "",
    "release_dates": {
        "theater": "1999-03-31",
        "dvd": "1999-10-12"
    },
    "ratings": {
        "critics_rating": "Fresh",
        "critics_score": 61,
        "audience_rating": "Upright",
        "audience_score": 69
    },
    "synopsis": "",
    "posters": {
        "thumbnail": "http://resizing.flixster.com/P1NHuj5sB43MAOyUNl-5XYvTKu4=/54x76/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/34/11153458_ori.jpg",
        "profile": "http://resizing.flixster.com/P1NHuj5sB43MAOyUNl-5XYvTKu4=/54x76/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/34/11153458_ori.jpg",
        "detailed": "http://resizing.flixster.com/P1NHuj5sB43MAOyUNl-5XYvTKu4=/54x76/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/34/11153458_ori.jpg",
        "original": "http://resizing.flixster.com/P1NHuj5sB43MAOyUNl-5XYvTKu4=/54x76/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/34/11153458_ori.jpg"
    },
    "abridged_cast": [
        {
        "name": "Larisa Oleynik",
        "id": "382254460",
        "characters": [
            "Bianca Stratford"
        ]
    },
    {
        "name": "Julia Stiles",
        "id": "162660056",
        "characters": [
            "Katarina Stratford"
        ]
    },
    {
        "name": "Heath Ledger",
        "id": "162652588",
        "characters": [
            "Patrick Verona"
        ]
    },
    {
        "name": "Andrew Keegan",
        "id": "382254462",
        "characters": [
            "Joey Donner"
        ]
    },
    {
        "name": "Joseph Gordon-Levitt",
        "id": "162666960",
        "characters": [
            "Cameron James"
        ]
    }
    ],
    "alternate_ids": {
        "imdb": "0147800"
    },
    "links": {
        "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10180.json",
        "alternate": "http://www.rottentomatoes.com/m/10_things_i_hate_about_you/",
        "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10180/cast.json",
        "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10180/reviews.json",
        "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10180/similar.json"
    }
},
{
    "id": "1789",
    "title": "War of the Worlds",
    "year": 2005,
    "mpaa_rating": "PG-13",
    "runtime": 117,
    "critics_consensus": "",
    "release_dates": {
        "theater": "2005-06-29",
        "dvd": "2005-11-22"
    },
    "ratings": {
        "critics_rating": "Fresh",
        "critics_score": 74,
        "audience_rating": "Spilled",
        "audience_score": 42
    },
    "synopsis": "",
    "posters": {
        "thumbnail": "http://resizing.flixster.com/p35Of5f6L93TK42uV8pKDydN3X4=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/94/11189471_ori.jpg",
        "profile": "http://resizing.flixster.com/p35Of5f6L93TK42uV8pKDydN3X4=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/94/11189471_ori.jpg",
        "detailed": "http://resizing.flixster.com/p35Of5f6L93TK42uV8pKDydN3X4=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/94/11189471_ori.jpg",
        "original": "http://resizing.flixster.com/p35Of5f6L93TK42uV8pKDydN3X4=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/94/11189471_ori.jpg"
    },
    "abridged_cast": [
        {
        "name": "Tom Cruise",
        "id": "162652763",
        "characters": [
            "Ray Ferrier"
        ]
    },
    {
        "name": "Dakota Fanning",
        "id": "162652764",
        "characters": [
            "Rachel Ferrier"
        ]
    },
    {
        "name": "Justin Chatwin",
        "id": "162652766",
        "characters": [
            "Robbie Ferrier"
        ]
    },
    {
        "name": "Miranda Otto",
        "id": "162652765",
        "characters": [
            "Mary Ann"
        ]
    },
    {
        "name": "Tim Robbins",
        "id": "162655168",
        "characters": [
            "Harlan Ogilvy"
        ]
    }
    ],
    "alternate_ids": {
        "imdb": "0407304"
    },
    "links": {
        "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/1789.json",
        "alternate": "http://www.rottentomatoes.com/m/war_of_the_worlds/",
        "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/1789/cast.json",
        "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/1789/reviews.json",
        "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/1789/similar.json"
    }
},
{
    "id": "669",
    "title": "The Longest Yard",
    "year": 2005,
    "mpaa_rating": "PG-13",
    "runtime": 113,
    "critics_consensus": "",
    "release_dates": {
        "theater": "2005-05-27",
        "dvd": "2004-08-03"
    },
    "ratings": {
        "critics_rating": "Rotten",
        "critics_score": 31,
        "audience_rating": "Upright",
        "audience_score": 62
    },
    "synopsis": "",
    "posters": {
        "thumbnail": "http://resizing.flixster.com/jaWOCWgy-6X-yduQ48oDS0sUnG4=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/89/11168956_ori.jpg",
        "profile": "http://resizing.flixster.com/jaWOCWgy-6X-yduQ48oDS0sUnG4=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/89/11168956_ori.jpg",
        "detailed": "http://resizing.flixster.com/jaWOCWgy-6X-yduQ48oDS0sUnG4=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/89/11168956_ori.jpg",
        "original": "http://resizing.flixster.com/jaWOCWgy-6X-yduQ48oDS0sUnG4=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/89/11168956_ori.jpg"
    },
    "abridged_cast": [
        {
        "name": "Adam Sandler",
        "id": "162652550",
        "characters": [
            "Paul `Wrecking' Crewe"
        ]
    },
    {
        "name": "Chris Rock",
        "id": "162652551",
        "characters": [
            "Caretaker"
        ]
    },
    {
        "name": "Burt Reynolds",
        "id": "162652552",
        "characters": [
            "Coach Nate Scarborough"
        ]
    },
    {
        "name": "James Cromwell",
        "id": "162652553",
        "characters": [
            "Warden Hazen"
        ]
    },
    {
        "name": "Walter Williamson",
        "id": "770709911",
        "characters": [
            "Errol Dandridge"
        ]
    }
    ],
    "alternate_ids": {
        "imdb": "0398165"
    },
    "links": {
        "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/669.json",
        "alternate": "http://www.rottentomatoes.com/m/longest_yard/",
        "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/669/cast.json",
        "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/669/reviews.json",
        "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/669/similar.json"
    }
},
{
    "id": "24214",
    "title": "The Chronicles of Narnia: The Lion, The Witch and The Wardrobe",
    "year": 2005,
    "mpaa_rating": "PG",
    "runtime": 139,
    "critics_consensus": "",
    "release_dates": {
        "theater": "2005-12-09",
        "dvd": "2006-04-04"
    },
    "ratings": {
        "critics_rating": "Certified Fresh",
        "critics_score": 76,
        "audience_rating": "Upright",
        "audience_score": 61
    },
    "synopsis": "",
    "posters": {
        "thumbnail": "http://resizing.flixster.com/cqqIEgv1dU7KZKNn6f5J4yTEviI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/91/87/10918786_ori.jpg",
        "profile": "http://resizing.flixster.com/cqqIEgv1dU7KZKNn6f5J4yTEviI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/91/87/10918786_ori.jpg",
        "detailed": "http://resizing.flixster.com/cqqIEgv1dU7KZKNn6f5J4yTEviI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/91/87/10918786_ori.jpg",
        "original": "http://resizing.flixster.com/cqqIEgv1dU7KZKNn6f5J4yTEviI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/91/87/10918786_ori.jpg"
    },
    "abridged_cast": [
        {
        "name": "Georgie Henley",
        "id": "284340695",
        "characters": [
            "Lucy Pevensie"
        ]
    },
    {
        "name": "Skandar Keynes",
        "id": "326299532",
        "characters": [
            "Edmund Pevensie"
        ]
    },
    {
        "name": "William Moseley",
        "id": "376791694",
        "characters": [
            "Peter Pevensie"
        ]
    },
    {
        "name": "Anna Popplewell",
        "id": "284340694",
        "characters": [
            "Susan Pevensie"
        ]
    },
    {
        "name": "Tilda Swinton",
        "id": "162654047",
        "characters": [
            "Jadis",
            "the White Witch"
        ]
    }
    ],
    "alternate_ids": {
        "imdb": "0363771"
    },
    "links": {
        "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/24214.json",
        "alternate": "http://www.rottentomatoes.com/m/chronicles_of_narnia_lion_witch_wardrobe/",
        "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/24214/cast.json",
        "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/24214/reviews.json",
        "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/24214/similar.json"
    }
},
{
    "id": "10154",
    "title": "The Day After Tomorrow",
    "year": 2004,
    "mpaa_rating": "PG-13",
    "runtime": 124,
    "critics_consensus": "",
    "release_dates": {
        "theater": "2004-05-28",
        "dvd": "2004-10-12"
    },
    "ratings": {
        "critics_rating": "Rotten",
        "critics_score": 45,
        "audience_rating": "Spilled",
        "audience_score": 50
    },
    "synopsis": "",
    "posters": {
        "thumbnail": "http://resizing.flixster.com/Nto31D0L7cioJhL9G_lm_oADJC8=/54x75/dkpu1ddg7pbsk.cloudfront.net/movie/25/43/254313_ori.jpg",
        "profile": "http://resizing.flixster.com/Nto31D0L7cioJhL9G_lm_oADJC8=/54x75/dkpu1ddg7pbsk.cloudfront.net/movie/25/43/254313_ori.jpg",
        "detailed": "http://resizing.flixster.com/Nto31D0L7cioJhL9G_lm_oADJC8=/54x75/dkpu1ddg7pbsk.cloudfront.net/movie/25/43/254313_ori.jpg",
        "original": "http://resizing.flixster.com/Nto31D0L7cioJhL9G_lm_oADJC8=/54x75/dkpu1ddg7pbsk.cloudfront.net/movie/25/43/254313_ori.jpg"
    },
    "abridged_cast": [
        {
        "name": "Dennis Quaid",
        "id": "162655527",
        "characters": [
            "Jack Hall"
        ]
      },
      {
        "name": "Jake Gyllenhaal",
        "id": "162653968",
        "characters": [
          "Sam Hall"
        ]
      },
      {
        "name": "Emmy Rossum",
        "id": "162659103",
        "characters": [
          "Laura Chapman"
        ]
      },
      {
        "name": "Dash Mihok",
        "id": "162733478",
        "characters": [
          "Jason Evans"
        ]
      },
      {
        "name": "Jay O Sanders",
        "id": "341815997",
        "characters": [
          "Frank Harris"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0319262"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10154.json",
      "alternate": "http://www.rottentomatoes.com/m/day_after_tomorrow/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10154/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10154/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10154/similar.json"
    }
  },
  {
    "id": "10398",
    "title": "Save the Last Dance",
    "year": 2001,
    "mpaa_rating": "PG-13",
    "runtime": 112,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2001-01-12",
      "dvd": "2001-06-19"
    },
    "ratings": {
      "critics_rating": "Rotten",
      "critics_score": 53,
      "audience_rating": "Spilled",
      "audience_score": 59
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/8ejlh6o6Jx-DGXS1oMosF4l6XJ0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/16/90/48/1690480_ori.jpg",
      "profile": "http://resizing.flixster.com/8ejlh6o6Jx-DGXS1oMosF4l6XJ0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/16/90/48/1690480_ori.jpg",
      "detailed": "http://resizing.flixster.com/8ejlh6o6Jx-DGXS1oMosF4l6XJ0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/16/90/48/1690480_ori.jpg",
      "original": "http://resizing.flixster.com/8ejlh6o6Jx-DGXS1oMosF4l6XJ0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/16/90/48/1690480_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Julia Stiles",
        "id": "162660056",
        "characters": [
          "Sara"
        ]
      },
      {
        "name": "Sean Patrick Thomas",
        "id": "162662807",
        "characters": [
          "Derek"
        ]
      },
      {
        "name": "Kerry Washington",
        "id": "162682773",
        "characters": [
          "Chenille"
        ]
      },
      {
        "name": "Fredro Starr",
        "id": "371353026",
        "characters": [
          "Malakai"
        ]
      },
      {
        "name": "Terry Kinney",
        "id": "326391349",
        "characters": [
          "Roy"
        ]
      }
    ],
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10398.json",
      "alternate": "http://www.rottentomatoes.com/m/save_the_last_dance/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10398/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10398/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10398/similar.json"
    }
  },
  {
    "id": "9272",
    "title": "Harry Potter and the Goblet of Fire",
    "year": 2005,
    "mpaa_rating": "PG-13",
    "runtime": 157,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2005-11-18",
      "dvd": "2006-03-07"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 88,
      "audience_rating": "Upright",
      "audience_score": 74
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/Xz-vzDgcK2rAAwoHHnFKN3mU2Io=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/88/11168873_ori.jpg",
      "profile": "http://resizing.flixster.com/Xz-vzDgcK2rAAwoHHnFKN3mU2Io=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/88/11168873_ori.jpg",
      "detailed": "http://resizing.flixster.com/Xz-vzDgcK2rAAwoHHnFKN3mU2Io=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/88/11168873_ori.jpg",
      "original": "http://resizing.flixster.com/Xz-vzDgcK2rAAwoHHnFKN3mU2Io=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/88/11168873_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Daniel Radcliffe",
        "id": "162655375",
        "characters": [
          "Harry Potter"
        ]
      },
      {
        "name": "Rupert Grint",
        "id": "162655376",
        "characters": [
          "Ron Weasley"
        ]
      },
      {
        "name": "Emma Watson",
        "id": "162655378",
        "characters": [
          "Hermione Granger"
        ]
      },
      {
        "name": "Robbie Coltrane",
        "id": "162655379",
        "characters": [
          "Rubeus Hagrid"
        ]
      },
      {
        "name": "Ralph Fiennes",
        "id": "162653681",
        "characters": [
          "Lord Voldemort"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0330373"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/9272.json",
      "alternate": "http://www.rottentomatoes.com/m/harry_potter_and_the_goblet_of_fire/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/9272/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/9272/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/9272/similar.json"
    }
  },
  {
    "id": "17462",
    "title": "There's Something About Mary",
    "year": 1998,
    "mpaa_rating": "R",
    "runtime": 118,
    "critics_consensus": "",
    "release_dates": {
      "theater": "1998-07-15",
      "dvd": "1999-08-03"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 83,
      "audience_rating": "Upright",
      "audience_score": 60
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/zopH_L0mkbcgrwE9RX-Q3D7L47I=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/67/11176790_ori.jpg",
      "profile": "http://resizing.flixster.com/zopH_L0mkbcgrwE9RX-Q3D7L47I=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/67/11176790_ori.jpg",
      "detailed": "http://resizing.flixster.com/zopH_L0mkbcgrwE9RX-Q3D7L47I=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/67/11176790_ori.jpg",
      "original": "http://resizing.flixster.com/zopH_L0mkbcgrwE9RX-Q3D7L47I=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/67/11176790_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Cameron Diaz",
        "id": "162654443",
        "characters": [
          "Mary"
        ]
      },
      {
        "name": "Ben Stiller",
        "id": "162659371",
        "characters": [
          "Ted Stroehmann"
        ]
      },
      {
        "name": "Matt Dillon",
        "id": "162652207",
        "characters": [
          "Pat Healy"
        ]
      },
      {
        "name": "Chris Elliott",
        "id": "162672928",
        "characters": [
          "Dom"
        ]
      },
      {
        "name": "Lin Shaye",
        "id": "364609819",
        "characters": [
          "Magda"
        ]
      }
    ],
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/17462.json",
      "alternate": "http://www.rottentomatoes.com/m/theres_something_about_mary/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/17462/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/17462/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/17462/similar.json"
    }
  },
  {
    "id": "10020",
    "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "year": 2003,
    "mpaa_rating": "PG-13",
    "runtime": 143,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2003-06-28",
      "dvd": "2003-12-02"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 79,
      "audience_rating": "Upright",
      "audience_score": 86
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/mkn9iS4Tq9SNJq9owxvu8JcEOrk=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/76/11157635_ori.jpg",
      "profile": "http://resizing.flixster.com/mkn9iS4Tq9SNJq9owxvu8JcEOrk=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/76/11157635_ori.jpg",
      "detailed": "http://resizing.flixster.com/mkn9iS4Tq9SNJq9owxvu8JcEOrk=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/76/11157635_ori.jpg",
      "original": "http://resizing.flixster.com/mkn9iS4Tq9SNJq9owxvu8JcEOrk=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/76/11157635_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Johnny Depp",
        "id": "162652817",
        "characters": [
          "Jack Sparrow"
        ]
      },
      {
        "name": "Geoffrey Rush",
        "id": "162659119",
        "characters": [
          "Captain Barbossa"
        ]
      },
      {
        "name": "Orlando Bloom",
        "id": "162652240",
        "characters": [
          "Will Turner"
        ]
      },
      {
        "name": "Keira Knightley",
        "id": "162654560",
        "characters": [
          "Elizabeth Swann"
        ]
      },
      {
        "name": "Jack Davenport",
        "id": "162659479",
        "characters": [
          "Norrington"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0325980"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10020.json",
      "alternate": "http://www.rottentomatoes.com/m/pirates_of_the_caribbean_the_curse_of_the_black_pearl/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10020/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10020/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10020/similar.json"
    }
  },
  {
    "id": "10041",
    "title": "Meet the Fockers",
    "year": 2004,
    "mpaa_rating": "PG-13",
    "runtime": 118,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2004-12-22",
      "dvd": "2005-04-26"
    },
    "ratings": {
      "critics_rating": "Rotten",
      "critics_score": 38,
      "audience_rating": "Spilled",
      "audience_score": 58
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/qjhy3EEdD9DfEE_f_rEUe6o6KKs=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/86/10/10861012_ori.jpg",
      "profile": "http://resizing.flixster.com/qjhy3EEdD9DfEE_f_rEUe6o6KKs=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/86/10/10861012_ori.jpg",
      "detailed": "http://resizing.flixster.com/qjhy3EEdD9DfEE_f_rEUe6o6KKs=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/86/10/10861012_ori.jpg",
      "original": "http://resizing.flixster.com/qjhy3EEdD9DfEE_f_rEUe6o6KKs=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/86/10/10861012_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Robert De Niro",
        "id": "162655521",
        "characters": [
          "Jack Byrnes"
        ]
      },
      {
        "name": "Ben Stiller",
        "id": "162659371",
        "characters": [
          "Greg Focker"
        ]
      },
      {
        "name": "Dustin Hoffman",
        "id": "162659372",
        "characters": [
          "Bernie Focker"
        ]
      },
      {
        "name": "Barbra Streisand",
        "id": "162655994",
        "characters": [
          "Roz Focker"
        ]
      },
      {
        "name": "Blythe Danner",
        "id": "162659375",
        "characters": [
          "Dina Byrnes"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0290002"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10041.json",
      "alternate": "http://www.rottentomatoes.com/m/meet_the_fockers/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10041/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10041/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10041/similar.json"
    }
  },
  {
    "id": "1965",
    "title": "Charlie and the Chocolate Factory",
    "year": 2005,
    "mpaa_rating": "PG",
    "runtime": 130,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2005-07-15",
      "dvd": "2005-11-07"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 82,
      "audience_rating": "Spilled",
      "audience_score": 51
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/-HrSWPPwQDzwBGYvfBoDVv4o36U=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/64/11176489_ori.jpg",
      "profile": "http://resizing.flixster.com/-HrSWPPwQDzwBGYvfBoDVv4o36U=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/64/11176489_ori.jpg",
      "detailed": "http://resizing.flixster.com/-HrSWPPwQDzwBGYvfBoDVv4o36U=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/64/11176489_ori.jpg",
      "original": "http://resizing.flixster.com/-HrSWPPwQDzwBGYvfBoDVv4o36U=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/64/11176489_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Johnny Depp",
        "id": "162652817",
        "characters": [
          "Willy Wonka"
        ]
      },
      {
        "name": "Freddie Highmore",
        "id": "162652818",
        "characters": [
          "Charlie Bucket"
        ]
      },
      {
        "name": "David Kelly",
        "id": "162652819",
        "characters": [
          "Grandpa Joe"
        ]
      },
      {
        "name": "Noah Taylor",
        "id": "162708662",
        "characters": [
          "Mr. Bucket"
        ]
      },
      {
        "name": "Missi Pyle",
        "id": "584856350",
        "characters": [
          "Mrs. Beauregarde"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0367594"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/1965.json",
      "alternate": "http://www.rottentomatoes.com/m/charlie_and_the_chocolate_factory/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/1965/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/1965/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/1965/similar.json"
    }
  },
  {
    "id": "10437",
    "title": "The Ring",
    "year": 2002,
    "mpaa_rating": "PG-13",
    "runtime": 115,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2002-10-18",
      "dvd": "2003-03-04"
    },
    "ratings": {
      "critics_rating": "Fresh",
      "critics_score": 72,
      "audience_rating": "Spilled",
      "audience_score": 48
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/vfktsuciqeF-QkDy4vN-MyMownc=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/10/86/94/10869458_ori.jpg",
      "profile": "http://resizing.flixster.com/vfktsuciqeF-QkDy4vN-MyMownc=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/10/86/94/10869458_ori.jpg",
      "detailed": "http://resizing.flixster.com/vfktsuciqeF-QkDy4vN-MyMownc=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/10/86/94/10869458_ori.jpg",
      "original": "http://resizing.flixster.com/vfktsuciqeF-QkDy4vN-MyMownc=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/10/86/94/10869458_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Naomi Watts",
        "id": "162654749",
        "characters": [
          "Rachel Keller"
        ]
      },
      {
        "name": "Martin Henderson",
        "id": "162659577",
        "characters": [
          "Noah"
        ]
      },
      {
        "name": "David Dorfman",
        "id": "162660316",
        "characters": [
          "Aidan Keller"
        ]
      },
      {
        "name": "Brian Cox",
        "id": "162653324",
        "characters": [
          "Richard Morgan"
        ]
      },
      {
        "name": "Jane Alexander",
        "id": "162668123",
        "characters": [
          "Dr. Grasnik"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0298130"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10437.json",
      "alternate": "http://www.rottentomatoes.com/m/ring/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10437/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10437/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10437/similar.json"
    }
  },
  {
    "id": "10011",
    "title": "The Incredibles",
    "year": 2004,
    "mpaa_rating": "PG",
    "runtime": 115,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2004-11-05",
      "dvd": "2005-03-15"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 97,
      "audience_rating": "Upright",
      "audience_score": 74
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/WAC8Kz0i7LJd04JteDVRkDHHHA4=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/93/90/10939047_ori.jpg",
      "profile": "http://resizing.flixster.com/WAC8Kz0i7LJd04JteDVRkDHHHA4=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/93/90/10939047_ori.jpg",
      "detailed": "http://resizing.flixster.com/WAC8Kz0i7LJd04JteDVRkDHHHA4=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/93/90/10939047_ori.jpg",
      "original": "http://resizing.flixster.com/WAC8Kz0i7LJd04JteDVRkDHHHA4=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/93/90/10939047_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Holly Hunter",
        "id": "162659069",
        "characters": [
          "Helen Parr/Elastigirl"
        ]
      },
      {
        "name": "Dominique Louis",
        "id": "771028235",
        "characters": [
          "Bomb Voyage"
        ]
      },
      {
        "name": "Teddy Newton",
        "id": "770673196",
        "characters": [
          "Newsreel Narrator"
        ]
      },
      {
        "name": "Jean Sincere",
        "id": "770914344",
        "characters": [
          "Mrs. Hogenson"
        ]
      },
      {
        "name": "Eli Fucile",
        "id": "770689971",
        "characters": [
          "Jack Jack Parr"
        ]
      }
    ],
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10011.json",
      "alternate": "http://www.rottentomatoes.com/m/incredibles/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10011/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10011/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10011/similar.json"
    }
  },
  {
    "id": "9",
    "title": "Star Wars: Episode III - Revenge of the Sith 3D",
    "year": 2005,
    "mpaa_rating": "PG-13",
    "runtime": 140,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2005-05-19",
      "dvd": "2005-11-01"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 80,
      "audience_rating": "Upright",
      "audience_score": 65
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/6N7_Je5kg5EhyiMB5o34H-fGuKM=/54x74/dkpu1ddg7pbsk.cloudfront.net/movie/10/94/47/10944718_ori.jpg",
      "profile": "http://resizing.flixster.com/6N7_Je5kg5EhyiMB5o34H-fGuKM=/54x74/dkpu1ddg7pbsk.cloudfront.net/movie/10/94/47/10944718_ori.jpg",
      "detailed": "http://resizing.flixster.com/6N7_Je5kg5EhyiMB5o34H-fGuKM=/54x74/dkpu1ddg7pbsk.cloudfront.net/movie/10/94/47/10944718_ori.jpg",
      "original": "http://resizing.flixster.com/6N7_Je5kg5EhyiMB5o34H-fGuKM=/54x74/dkpu1ddg7pbsk.cloudfront.net/movie/10/94/47/10944718_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Ewan McGregor",
        "id": "162652152",
        "characters": [
          "Obi-Wan Kenobi"
        ]
      },
      {
        "name": "Natalie Portman",
        "id": "162652154",
        "characters": [
          "Padme Amidala"
        ]
      },
      {
        "name": "Hayden Christensen",
        "id": "162652153",
        "characters": [
          "Anakin Skywalker"
        ]
      },
      {
        "name": "Ian McDiarmid",
        "id": "162652155",
        "characters": [
          "Supreme Chancellor Palpatine"
        ]
      },
      {
        "name": "Samuel L. Jackson",
        "id": "162652156",
        "characters": [
          "Mace Windu"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0121766"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/9.json",
      "alternate": "http://www.rottentomatoes.com/m/star_wars_episode_iii_revenge_of_the_sith_3d/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/9/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/9/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/9/similar.json"
    }
  },
  {
    "id": "10156",
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "mpaa_rating": "PG-13",
    "runtime": 201,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2003-12-17",
      "dvd": "2004-05-25"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 95,
      "audience_rating": "Upright",
      "audience_score": 86
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/yHOOdjXPIDnSNbOOJVHCOUo93v4=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/64/11166423_ori.jpg",
      "profile": "http://resizing.flixster.com/yHOOdjXPIDnSNbOOJVHCOUo93v4=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/64/11166423_ori.jpg",
      "detailed": "http://resizing.flixster.com/yHOOdjXPIDnSNbOOJVHCOUo93v4=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/64/11166423_ori.jpg",
      "original": "http://resizing.flixster.com/yHOOdjXPIDnSNbOOJVHCOUo93v4=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/64/11166423_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Elijah Wood",
        "id": "162652512",
        "characters": [
          "Frodo Baggins"
        ]
      },
      {
        "name": "Ian McKellen",
        "id": "162653241",
        "characters": [
          "Gandalf"
        ]
      },
      {
        "name": "Viggo Mortensen",
        "id": "162654541",
        "characters": [
          "Aragorn"
        ]
      },
      {
        "name": "Sean Astin",
        "id": "162659177",
        "characters": [
          "Samwise Gamgee"
        ]
      },
      {
        "name": "Orlando Bloom",
        "id": "162652240",
        "characters": [
          "Legolas"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0167260"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10156.json",
      "alternate": "http://www.rottentomatoes.com/m/the_lord_of_the_rings_the_return_of_the_king/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10156/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10156/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10156/similar.json"
    }
  },
  {
    "id": "12897",
    "title": "The Matrix",
    "year": 1999,
    "mpaa_rating": "R",
    "runtime": 136,
    "critics_consensus": "",
    "release_dates": {
      "theater": "1999-03-31",
      "dvd": "1999-09-21"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 87,
      "audience_rating": "Upright",
      "audience_score": 85
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/6kkv8gQh_xnGDYbWvda5DmnHo-s=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/80/11168096_ori.jpg",
      "profile": "http://resizing.flixster.com/6kkv8gQh_xnGDYbWvda5DmnHo-s=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/80/11168096_ori.jpg",
      "detailed": "http://resizing.flixster.com/6kkv8gQh_xnGDYbWvda5DmnHo-s=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/80/11168096_ori.jpg",
      "original": "http://resizing.flixster.com/6kkv8gQh_xnGDYbWvda5DmnHo-s=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/80/11168096_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Keanu Reeves",
        "id": "162654049",
        "characters": [
          "Neo"
        ]
      },
      {
        "name": "Laurence Fishburne",
        "id": "162669090",
        "characters": [
          "Morpheus"
        ]
      },
      {
        "name": "Carrie-Anne Moss",
        "id": "162669130",
        "characters": [
          "Trinity"
        ]
      },
      {
        "name": "Joe Pantoliano",
        "id": "162686963",
        "characters": [
          "Cypher"
        ]
      },
      {
        "name": "Hugo Weaving",
        "id": "162709905",
        "characters": [
          "Agent Smith"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0133093"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/12897.json",
      "alternate": "http://www.rottentomatoes.com/m/matrix/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/12897/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/12897/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/12897/similar.json"
    }
  },
  {
    "id": "22494",
    "title": "Titanic",
    "year": 1997,
    "mpaa_rating": "PG-13",
    "runtime": 194,
    "critics_consensus": "",
    "release_dates": {
      "theater": "1997-12-19",
      "dvd": "2012-09-10"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 88,
      "audience_rating": "Upright",
      "audience_score": 69
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/sWle3WJBfZ4Afd0F7SK11vyNJmo=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/63/11166320_ori.jpg",
      "profile": "http://resizing.flixster.com/sWle3WJBfZ4Afd0F7SK11vyNJmo=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/63/11166320_ori.jpg",
      "detailed": "http://resizing.flixster.com/sWle3WJBfZ4Afd0F7SK11vyNJmo=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/63/11166320_ori.jpg",
      "original": "http://resizing.flixster.com/sWle3WJBfZ4Afd0F7SK11vyNJmo=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/63/11166320_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Leonardo DiCaprio",
        "id": "162659161",
        "characters": [
          "Jack Dawson"
        ]
      },
      {
        "name": "Kate Winslet",
        "id": "162659302",
        "characters": [
          "Rose DeWitt Bukater"
        ]
      },
      {
        "name": "Billy Zane",
        "id": "162668093",
        "characters": [
          "Cal Hockley"
        ]
      },
      {
        "name": "Kathy Bates",
        "id": "162660148",
        "characters": [
          "Molly Brown"
        ]
      },
      {
        "name": "Frances Fisher",
        "id": "168455428",
        "characters": [
          "Ruth DeWitt Bukater"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0120338"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/22494.json",
      "alternate": "http://www.rottentomatoes.com/m/titanic/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/22494/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/22494/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/22494/similar.json"
    }
  },
  {
    "id": "10489",
    "title": "E.T. The Extra-Terrestrial",
    "year": 1982,
    "mpaa_rating": "PG",
    "runtime": 114,
    "critics_consensus": "",
    "release_dates": {
      "theater": "1982-06-11",
      "dvd": "2002-10-22"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 98,
      "audience_rating": "Upright",
      "audience_score": 71
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/g2-eDuseYn5J05smQed6f3oaFDM=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/67/11166788_ori.jpg",
      "profile": "http://resizing.flixster.com/g2-eDuseYn5J05smQed6f3oaFDM=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/67/11166788_ori.jpg",
      "detailed": "http://resizing.flixster.com/g2-eDuseYn5J05smQed6f3oaFDM=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/67/11166788_ori.jpg",
      "original": "http://resizing.flixster.com/g2-eDuseYn5J05smQed6f3oaFDM=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/67/11166788_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Henry Thomas",
        "id": "162661716",
        "characters": [
          "Elliott"
        ]
      },
      {
        "name": "Dee Wallace Stone",
        "id": "770879854",
        "characters": [
          "Mary"
        ]
      },
      {
        "name": "Peter Coyote",
        "id": "162663977",
        "characters": [
          "Keys"
        ]
      },
      {
        "name": "Robert MacNaughton",
        "id": "341816137",
        "characters": [
          "Michael"
        ]
      },
      {
        "name": "Drew Barrymore",
        "id": "162652402",
        "characters": [
          "Gertie"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0083866"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10489.json",
      "alternate": "http://www.rottentomatoes.com/m/et_the_extraterrestrial/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10489/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10489/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10489/similar.json"
    }
  },
  {
    "id": "770676429",
    "title": "Transformers: Revenge of the Fallen",
    "year": 2009,
    "mpaa_rating": "PG-13",
    "runtime": 149,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2009-06-24",
      "dvd": "2009-10-20"
    },
    "ratings": {
      "critics_rating": "Rotten",
      "critics_score": 19,
      "audience_rating": "Spilled",
      "audience_score": 58
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/WDL7fB2cAVg6e2Sn_U1O76GVLK8=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/66/11176669_ori.jpg",
      "profile": "http://resizing.flixster.com/WDL7fB2cAVg6e2Sn_U1O76GVLK8=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/66/11176669_ori.jpg",
      "detailed": "http://resizing.flixster.com/WDL7fB2cAVg6e2Sn_U1O76GVLK8=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/66/11176669_ori.jpg",
      "original": "http://resizing.flixster.com/WDL7fB2cAVg6e2Sn_U1O76GVLK8=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/66/11176669_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Shia LaBeouf",
        "id": "162654215",
        "characters": [
          "Sam Witwicky"
        ]
      },
      {
        "name": "Megan Fox",
        "id": "162665778",
        "characters": [
          "Mikaela Banes"
        ]
      },
      {
        "name": "Josh Duhamel",
        "id": "162669304",
        "characters": [
          "Sergeant Lennox"
        ]
      },
      {
        "name": "Tyrese Gibson",
        "id": "162653183",
        "characters": [
          "USAF Tech Sergeant Epps"
        ]
      },
      {
        "name": "John Turturro",
        "id": "162665207",
        "characters": [
          "Agent Simmons"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "1055369"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/770676429.json",
      "alternate": "http://www.rottentomatoes.com/m/transformers_revenge_of_the_fallen/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/770676429/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/770676429/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/770676429/similar.json"
    }
  },
  {
    "id": "358189806",
    "title": "The Bourne Ultimatum",
    "year": 2007,
    "mpaa_rating": "PG-13",
    "runtime": 115,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2007-08-03",
      "dvd": "2007-12-11"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 94,
      "audience_rating": "Upright",
      "audience_score": 91
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/bqb-KglXdfoJvbC0xyJl4N7Pdxc=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/16/11171613_ori.jpg",
      "profile": "http://resizing.flixster.com/bqb-KglXdfoJvbC0xyJl4N7Pdxc=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/16/11171613_ori.jpg",
      "detailed": "http://resizing.flixster.com/bqb-KglXdfoJvbC0xyJl4N7Pdxc=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/16/11171613_ori.jpg",
      "original": "http://resizing.flixster.com/bqb-KglXdfoJvbC0xyJl4N7Pdxc=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/16/11171613_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Matt Damon",
        "id": "162653499",
        "characters": [
          "Jason Bourne"
        ]
      },
      {
        "name": "Julia Stiles",
        "id": "162660056",
        "characters": [
          "Nicky Parsons"
        ]
      },
      {
        "name": "David Strathairn",
        "id": "162654527",
        "characters": [
          "Noah Vosen"
        ]
      },
      {
        "name": "Scott Glenn",
        "id": "162670425",
        "characters": [
          "Ezra Kramer"
        ]
      },
      {
        "name": "Paddy Considine",
        "id": "162652573",
        "characters": [
          "Simon Ross"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0440963"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/358189806.json",
      "alternate": "http://www.rottentomatoes.com/m/bourne_ultimatum/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/358189806/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/358189806/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/358189806/similar.json"
    }
  },
  {
    "id": "387569635",
    "title": "Harry Potter and the Order of the Phoenix",
    "year": 2007,
    "mpaa_rating": "PG-13",
    "runtime": 138,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2007-07-11",
      "dvd": "2007-11-11"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 79,
      "audience_rating": "Upright",
      "audience_score": 81
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/o7xhx_7LvWeQASeXjcKD6vwT7E0=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/88/11168876_ori.jpg",
      "profile": "http://resizing.flixster.com/o7xhx_7LvWeQASeXjcKD6vwT7E0=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/88/11168876_ori.jpg",
      "detailed": "http://resizing.flixster.com/o7xhx_7LvWeQASeXjcKD6vwT7E0=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/88/11168876_ori.jpg",
      "original": "http://resizing.flixster.com/o7xhx_7LvWeQASeXjcKD6vwT7E0=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/88/11168876_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Daniel Radcliffe",
        "id": "162655375",
        "characters": [
          "Harry Potter"
        ]
      },
      {
        "name": "Rupert Grint",
        "id": "162655376",
        "characters": [
          "Ron Weasley"
        ]
      },
      {
        "name": "Emma Watson",
        "id": "162655378",
        "characters": [
          "Hermione Granger"
        ]
      },
      {
        "name": "Michael Gambon",
        "id": "162676818",
        "characters": [
          "Albus Dumbledore"
        ]
      },
      {
        "name": "Ralph Fiennes",
        "id": "162653681",
        "characters": [
          "Lord Voldemort"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0373889"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/387569635.json",
      "alternate": "http://www.rottentomatoes.com/m/harry_potter_and_the_order_of_the_phoenix/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/387569635/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/387569635/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/387569635/similar.json"
    }
  },
  {
    "id": "406923403",
    "title": "The Simpsons Movie",
    "year": 2007,
    "mpaa_rating": "PG-13",
    "runtime": 86,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2007-07-27",
      "dvd": "2007-12-18"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 90,
      "audience_rating": "Upright",
      "audience_score": 77
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/dijLyWs2bs3EkiGarVYH-BjWnzg=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/84/37/10843725_ori.jpg",
      "profile": "http://resizing.flixster.com/dijLyWs2bs3EkiGarVYH-BjWnzg=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/84/37/10843725_ori.jpg",
      "detailed": "http://resizing.flixster.com/dijLyWs2bs3EkiGarVYH-BjWnzg=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/84/37/10843725_ori.jpg",
      "original": "http://resizing.flixster.com/dijLyWs2bs3EkiGarVYH-BjWnzg=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/84/37/10843725_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Julie Kavner",
        "id": "406923405",
        "characters": [
          "Marge"
        ]
      },
      {
        "name": "Dan Castellaneta",
        "id": "292632063",
        "characters": [
          "Homer/Itchy/Barney/Grampa/Krusty/Mayor Quimby/Mel"
        ]
      },
      {
        "name": "Nancy Cartwright",
        "id": "406923407",
        "characters": [
          "Bart/Maggie/Ralph/Todd Flanders/TV Daughter"
        ]
      },
      {
        "name": "Yeardley Smith",
        "id": "408823130",
        "characters": [
          "Lisa"
        ]
      },
      {
        "name": "Harry Shearer",
        "id": "162658996",
        "characters": [
          "Scratchy/Mr. Burns/Moe/Chief Wiggum/Ned Flanders"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0462538"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/406923403.json",
      "alternate": "http://www.rottentomatoes.com/m/simpsons_movie/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/406923403/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/406923403/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/406923403/similar.json"
    }
  },
  {
    "id": "771312088",
    "title": "The Hunger Games: Mockingjay - Part 1",
    "year": 2014,
    "mpaa_rating": "PG-13",
    "runtime": 125,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-11-21",
      "dvd": "2015-03-06"
    },
    "ratings": {
      "critics_rating": "Fresh",
      "critics_score": 65,
      "audience_rating": "Upright",
      "audience_score": 75
    },
    "synopsis": "The worldwide phenomenon of The Hunger Games continues to set the world on fire with The Hunger Games: Mockingjay - Part 1, which finds Katniss Everdeen (Jennifer Lawrence) in District 13 after she literally shatters the games forever. Under the leadership of President Coin (Julianne Moore) and the advice of her trusted friends, Katniss spreads her wings as she fights to save Peeta (Josh Hutcherson) and a nation moved by her courage. The Hunger Games: Mockingjay - Part 1 is directed by Francis Lawrence from a screenplay by Danny Strong and Peter Craig and produced by Nina Jacobson's Color Force in tandem with producer Jon Kilik. The novel on which the film is based is the third in a trilogy written by Suzanne Collins that has over 65 million copies in print in the U.S. alone. (c) Lionsgate",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/o5LFh1rOsPGEtzQEDloy-4HQsjE=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/98/11189899_ori.jpg",
      "profile": "http://resizing.flixster.com/o5LFh1rOsPGEtzQEDloy-4HQsjE=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/98/11189899_ori.jpg",
      "detailed": "http://resizing.flixster.com/o5LFh1rOsPGEtzQEDloy-4HQsjE=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/98/11189899_ori.jpg",
      "original": "http://resizing.flixster.com/o5LFh1rOsPGEtzQEDloy-4HQsjE=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/98/11189899_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Jennifer Lawrence",
        "id": "770800260",
        "characters": [
          "Katniss Everdeen"
        ]
      },
      {
        "name": "Liam Hemsworth",
        "id": "770833479",
        "characters": [
          "Gale Hawthorne"
        ]
      },
      {
        "name": "Josh Hutcherson",
        "id": "162654356",
        "characters": [
          "Peeta Mellark"
        ]
      },
      {
        "name": "Julianne Moore",
        "id": "162654248",
        "characters": [
          "President Alma Coin"
        ]
      },
      {
        "name": "Sam Claflin",
        "id": "771073196",
        "characters": [
          "Finnick"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "1951265"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771312088.json",
      "alternate": "http://www.rottentomatoes.com/m/the_hunger_games_mockingjay_part_1/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771312088/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771312088/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771312088/similar.json"
    }
  },
  {
    "id": "771181360",
    "title": "The Hobbit: The Battle of the Five Armies",
    "year": 2014,
    "mpaa_rating": "PG-13",
    "runtime": 144,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-12-17",
      "dvd": "2015-03-24"
    },
    "ratings": {
      "critics_rating": "Fresh",
      "critics_score": 60,
      "audience_rating": "Upright",
      "audience_score": 76
    },
    "synopsis": "From Academy Award (R)-winning filmmaker Peter Jackson comes \"The Hobbit: The Battle of the Five Armies,\" the third in a trilogy of films adapting the enduringly popular masterpiece The Hobbit, by J.R.R. Tolkien. \"The Hobbit: The Battle of the Five Armies\" brings to an epic conclusion the adventures of Bilbo Baggins, Thorin Oakenshield and the Company of Dwarves. Having reclaimed their homeland from the Dragon Smaug, the Company has unwittingly unleashed a deadly force into the world. Enraged, Smaug rains his fiery wrath down upon the defenseless men, women and children of Lake-town. Obsessed above all else with his reclaimed treasure, Thorin sacrifices friendship and honor tohoard it as Bilbo's frantic attempts to make him see reason drive the Hobbit towards a desperate and dangerous choice. But there are even greater dangers ahead. Unseen by any but the Wizard Gandalf, the great enemy Sauron has sent forth legions of Orcs in a stealth attack upon the Lonely Mountain. As darkness converges on their escalating conflict, the races of Dwarves, Elves and Men must decide - unite or be destroyed. Bilbo finds himself fighting for his life and the lives of his friends in the epic Battle of the Five Armies, as the future of Middle-earth hangs in the balance. (c) Warner Bros",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/DzsVu4vbUJL6eO4BZiUoHmAyEWA=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/97/11179703_ori.jpg",
      "profile": "http://resizing.flixster.com/DzsVu4vbUJL6eO4BZiUoHmAyEWA=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/97/11179703_ori.jpg",
      "detailed": "http://resizing.flixster.com/DzsVu4vbUJL6eO4BZiUoHmAyEWA=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/97/11179703_ori.jpg",
      "original": "http://resizing.flixster.com/DzsVu4vbUJL6eO4BZiUoHmAyEWA=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/97/11179703_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Martin Freeman (II)",
        "id": "162652296",
        "characters": [
          "Bilbo Baggins"
        ]
      },
      {
        "name": "Ian McKellen",
        "id": "162653241",
        "characters": [
          "Gandalf"
        ]
      },
      {
        "name": "Richard Armitage",
        "id": "546952855",
        "characters": [
          "Thorin Oakenshield"
        ]
      },
      {
        "name": "Andy Serkis",
        "id": "269710329",
        "characters": [
          "Gollum"
        ]
      },
      {
        "name": "Ian Holm",
        "id": "162653927",
        "characters": [
          "Bilbo Baggins (old)"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "2310332"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771181360.json",
      "alternate": "http://www.rottentomatoes.com/m/the_hobbit_the_battle_of_the_five_armies/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771181360/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771181360/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771181360/similar.json"
    }
  },
  {
    "id": "387253026",
    "title": "Shrek the Third",
    "year": 2007,
    "mpaa_rating": "PG",
    "runtime": 92,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2007-05-18",
      "dvd": "2007-11-13"
    },
    "ratings": {
      "critics_rating": "Rotten",
      "critics_score": 40,
      "audience_rating": "Spilled",
      "audience_score": 53
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/MHpsp8lpVLThBaHN9vBh3hRWuHI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/59/86/40/5986403_ori.jpg",
      "profile": "http://resizing.flixster.com/MHpsp8lpVLThBaHN9vBh3hRWuHI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/59/86/40/5986403_ori.jpg",
      "detailed": "http://resizing.flixster.com/MHpsp8lpVLThBaHN9vBh3hRWuHI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/59/86/40/5986403_ori.jpg",
      "original": "http://resizing.flixster.com/MHpsp8lpVLThBaHN9vBh3hRWuHI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/59/86/40/5986403_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Mike Myers",
        "id": "162659399",
        "characters": [
          "Shrek"
        ]
      },
      {
        "name": "Eddie Murphy",
        "id": "162657430",
        "characters": [
          "Donkey"
        ]
      },
      {
        "name": "Cameron Diaz",
        "id": "162654443",
        "characters": [
          "Princess Fiona"
        ]
      },
      {
        "name": "Antonio Banderas",
        "id": "162654885",
        "characters": [
          "Puss in Boots"
        ]
      },
      {
        "name": "Julie Andrews",
        "id": "162655749",
        "characters": [
          "Queen"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0413267"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/387253026.json",
      "alternate": "http://www.rottentomatoes.com/m/shrek_3/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/387253026/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/387253026/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/387253026/similar.json"
    }
  },
  {
    "id": "358177192",
    "title": "Transformers",
    "year": 2007,
    "mpaa_rating": "PG-13",
    "runtime": 143,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2007-07-03",
      "dvd": "2007-10-16"
    },
    "ratings": {
      "critics_rating": "Rotten",
      "critics_score": 57,
      "audience_rating": "Upright",
      "audience_score": 86
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/xIH1qiSS43LNBLFIOHWed8iCuo0=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/97/11169794_ori.jpg",
      "profile": "http://resizing.flixster.com/xIH1qiSS43LNBLFIOHWed8iCuo0=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/97/11169794_ori.jpg",
      "detailed": "http://resizing.flixster.com/xIH1qiSS43LNBLFIOHWed8iCuo0=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/97/11169794_ori.jpg",
      "original": "http://resizing.flixster.com/xIH1qiSS43LNBLFIOHWed8iCuo0=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/97/11169794_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Shia LaBeouf",
        "id": "162654215",
        "characters": [
          "Sam Witwicky"
        ]
      },
      {
        "name": "Megan Fox",
        "id": "162665778",
        "characters": [
          "Mikaela"
        ]
      },
      {
        "name": "Josh Duhamel",
        "id": "162669304",
        "characters": [
          "Sergeant Lennox"
        ]
      },
      {
        "name": "Tyrese Gibson",
        "id": "162653183",
        "characters": [
          "USAF Tech Sergeant. Epps"
        ]
      },
      {
        "name": "Rachael Taylor",
        "id": "761858507",
        "characters": [
          "Maggie Madsen"
        ]
      }
    ],
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/358177192.json",
      "alternate": "http://www.rottentomatoes.com/m/transformers_the_movie/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/358177192/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/358177192/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/358177192/similar.json"
    }
  },
  {
    "id": "770672301",
    "title": "Sweeney Todd: The Demon Barber of Fleet Street",
    "year": 2007,
    "mpaa_rating": "R",
    "runtime": 116,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2007-12-21",
      "dvd": "2008-04-01"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 85,
      "audience_rating": "Upright",
      "audience_score": 81
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/B0kBCy91jb_H-ViB1szpMIFogOI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/12/52/11125277_ori.jpg",
      "profile": "http://resizing.flixster.com/B0kBCy91jb_H-ViB1szpMIFogOI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/12/52/11125277_ori.jpg",
      "detailed": "http://resizing.flixster.com/B0kBCy91jb_H-ViB1szpMIFogOI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/12/52/11125277_ori.jpg",
      "original": "http://resizing.flixster.com/B0kBCy91jb_H-ViB1szpMIFogOI=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/12/52/11125277_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Johnny Depp",
        "id": "162652817",
        "characters": [
          "Sweeney Todd"
        ]
      },
      {
        "name": "Alan Rickman",
        "id": "162666132",
        "characters": [
          "Judge Turpin"
        ]
      },
      {
        "name": "Timothy Spall",
        "id": "162698684",
        "characters": [
          "Beadle Bamford"
        ]
      },
      {
        "name": "Sacha Baron Cohen",
        "id": "162652531",
        "characters": [
          "Adolfo Pirelli"
        ]
      },
      {
        "name": "Jamie Campbell Bower",
        "id": "770693477",
        "characters": [
          "Anthony Hope"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0408236"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672301.json",
      "alternate": "http://www.rottentomatoes.com/m/sweeney_todd_the_demon_barber_of_fleet_street_2007/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672301/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672301/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672301/similar.json"
    }
  },
  {
    "id": "358174817",
    "title": "Pirates of the Caribbean: At Worlds End",
    "year": 2007,
    "mpaa_rating": "PG-13",
    "runtime": 169,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2007-05-25",
      "dvd": "2007-12-04"
    },
    "ratings": {
      "critics_rating": "Rotten",
      "critics_score": 45,
      "audience_rating": "Upright",
      "audience_score": 72
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/Imx08ymA4NeDunV01CC59Alt6KA=/54x76/dkpu1ddg7pbsk.cloudfront.net/movie/10/95/55/10955508_ori.jpg",
      "profile": "http://resizing.flixster.com/Imx08ymA4NeDunV01CC59Alt6KA=/54x76/dkpu1ddg7pbsk.cloudfront.net/movie/10/95/55/10955508_ori.jpg",
      "detailed": "http://resizing.flixster.com/Imx08ymA4NeDunV01CC59Alt6KA=/54x76/dkpu1ddg7pbsk.cloudfront.net/movie/10/95/55/10955508_ori.jpg",
      "original": "http://resizing.flixster.com/Imx08ymA4NeDunV01CC59Alt6KA=/54x76/dkpu1ddg7pbsk.cloudfront.net/movie/10/95/55/10955508_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Johnny Depp",
        "id": "162652817",
        "characters": [
          "Captain Jack Sparrow"
        ]
      },
      {
        "name": "Geoffrey Rush",
        "id": "162659119",
        "characters": [
          "Captain Barbossa"
        ]
      },
      {
        "name": "Orlando Bloom",
        "id": "162652240",
        "characters": [
          "Will Turner"
        ]
      },
      {
        "name": "Keira Knightley",
        "id": "162654560",
        "characters": [
          "Elizabeth Swann"
        ]
      },
      {
        "name": "Jack Davenport",
        "id": "162659479",
        "characters": [
          "Commodore James Norrington"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0449088"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/358174817.json",
      "alternate": "http://www.rottentomatoes.com/m/pirates_of_the_caribbean_3/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/358174817/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/358174817/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/358174817/similar.json"
    }
  },
  {
    "id": "771349839",
    "title": "Night at the Museum: Secret of the Tomb",
    "year": 2014,
    "mpaa_rating": "PG",
    "runtime": 90,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-12-19",
      "dvd": "2015-03-10"
    },
    "ratings": {
      "critics_rating": "Rotten",
      "critics_score": 49,
      "audience_rating": "Upright",
      "audience_score": 61
    },
    "synopsis": "Get ready for the wildest and most adventure-filled Night At the Museum ever as Larry (Ben Stiller) spans the globe, uniting favorite and new characters while embarking on an epic quest to save the magic before it is gone forever. (c) Fox",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/ucEtjYQkOr9sIxRVxat3a7AzQjc=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/13/11181399_ori.jpg",
      "profile": "http://resizing.flixster.com/ucEtjYQkOr9sIxRVxat3a7AzQjc=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/13/11181399_ori.jpg",
      "detailed": "http://resizing.flixster.com/ucEtjYQkOr9sIxRVxat3a7AzQjc=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/13/11181399_ori.jpg",
      "original": "http://resizing.flixster.com/ucEtjYQkOr9sIxRVxat3a7AzQjc=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/13/11181399_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Ben Stiller",
        "id": "162659371",
        "characters": [
          "Larry Daley"
        ]
      },
      {
        "name": "Robin Williams",
        "id": "162652387",
        "characters": [
          "Teddy Roosevelt"
        ]
      },
      {
        "name": "Owen Wilson",
        "id": "162652836",
        "characters": [
          "Jedediah"
        ]
      },
      {
        "name": "Dan Stevens (IV)",
        "id": "770698532",
        "characters": [
          "Sir Lancelot"
        ]
      },
      {
        "name": "Ben Kingsley",
        "id": "162653703",
        "characters": [
          "Merenkahre"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "2692250"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771349839.json",
      "alternate": "http://www.rottentomatoes.com/m/night_at_the_museum_secret_of_the_tomb/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771349839/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771349839/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771349839/similar.json"
    }
  },
  {
    "id": "632295045",
    "title": "National Treasure: Book of Secrets",
    "year": 2007,
    "mpaa_rating": "PG",
    "runtime": 123,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2007-12-21",
      "dvd": "2008-05-18"
    },
    "ratings": {
      "critics_rating": "Rotten",
      "critics_score": 35,
      "audience_rating": "Upright",
      "audience_score": 67
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/6pfNYP63-_Kiov7I89z8b-URsfM=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/10/43/10104317_ori.jpg",
      "profile": "http://resizing.flixster.com/6pfNYP63-_Kiov7I89z8b-URsfM=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/10/43/10104317_ori.jpg",
      "detailed": "http://resizing.flixster.com/6pfNYP63-_Kiov7I89z8b-URsfM=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/10/43/10104317_ori.jpg",
      "original": "http://resizing.flixster.com/6pfNYP63-_Kiov7I89z8b-URsfM=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/10/43/10104317_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Nicolas Cage",
        "id": "162653923",
        "characters": [
          "Ben Gates"
        ]
      },
      {
        "name": "Justin Bartha",
        "id": "162659095",
        "characters": [
          "Riley Poole"
        ]
      },
      {
        "name": "Diane Kruger",
        "id": "162659094",
        "characters": [
          "Abigail Chase"
        ]
      },
      {
        "name": "Jon Voight",
        "id": "162664393",
        "characters": [
          "Patrick Gates"
        ]
      },
      {
        "name": "Helen Mirren",
        "id": "162662871",
        "characters": [
          "Emily Appleton"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0465234"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/632295045.json",
      "alternate": "http://www.rottentomatoes.com/m/national_treasure_book_of_secrets/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/632295045/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/632295045/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/632295045/similar.json"
    }
  },
  {
    "id": "771356920",
    "title": "Into the Woods",
    "year": 2014,
    "mpaa_rating": "PG",
    "runtime": 125,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-12-25",
      "dvd": "2015-03-24"
    },
    "ratings": {
      "critics_rating": "Fresh",
      "critics_score": 71,
      "audience_rating": "Spilled",
      "audience_score": 53
    },
    "synopsis": "\"Into the Woods\" is a modern twist on several of the beloved Brothers Grimm fairy tales, intertwining the plots of a few choice stories and exploring the consequences of the characters' wishes and quests. This humorous and heartfelt musical follows the classic tales of Cinderella (Anna Kendrick), Little Red Riding Hood (Lilla Crawford), Jack and the Beanstalk (Daniel Huttlestone), and Rapunzel (MacKenzie Mauzy)-all tied together by an original story involving a baker and his wife (James Corden & Emily Blunt), their wish to begin a family and their interaction with the witch (Meryl Streep) who has put a curse on them. (C) Disney",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/0ecX5ishkl0NOHQMZ56iqpegp7M=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/06/11180649_ori.jpg",
      "profile": "http://resizing.flixster.com/0ecX5ishkl0NOHQMZ56iqpegp7M=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/06/11180649_ori.jpg",
      "detailed": "http://resizing.flixster.com/0ecX5ishkl0NOHQMZ56iqpegp7M=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/06/11180649_ori.jpg",
      "original": "http://resizing.flixster.com/0ecX5ishkl0NOHQMZ56iqpegp7M=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/06/11180649_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Meryl Streep",
        "id": "162654900",
        "characters": [
          "The Witch"
        ]
      },
      {
        "name": "Emily Blunt",
        "id": "162685827",
        "characters": [
          "Baker's Wife"
        ]
      },
      {
        "name": "James Corden",
        "id": "405587980",
        "characters": [
          "Baker"
        ]
      },
      {
        "name": "Anna Kendrick",
        "id": "528367112",
        "characters": [
          "Cinderella"
        ]
      },
      {
        "name": "Chris Pine",
        "id": "326393041",
        "characters": [
          "Cinderella's Prince"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "2180411"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771356920.json",
      "alternate": "http://www.rottentomatoes.com/m/into_the_woods_2014/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771356920/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771356920/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771356920/similar.json"
    }
  },
  {
    "id": "771353298",
    "title": "Kingsman: The Secret Service",
    "year": 2015,
    "mpaa_rating": "R",
    "runtime": 128,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2015-02-13"
    },
    "ratings": {
      "critics_rating": "Fresh",
      "critics_score": 74,
      "audience_rating": "Upright",
      "audience_score": 88
    },
    "synopsis": "Based upon the acclaimed comic book and directed by Matthew Vaughn (Kick Ass, X-Men First Class), Kingsman: The Secret Service tells the story of a super-secret spy organization that recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a global threat emerges from a twisted tech genius. (c) Fox",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/AnzzLpbjngMeECOABktuJ0iABI8=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/95/11189501_ori.jpg",
      "profile": "http://resizing.flixster.com/AnzzLpbjngMeECOABktuJ0iABI8=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/95/11189501_ori.jpg",
      "detailed": "http://resizing.flixster.com/AnzzLpbjngMeECOABktuJ0iABI8=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/95/11189501_ori.jpg",
      "original": "http://resizing.flixster.com/AnzzLpbjngMeECOABktuJ0iABI8=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/95/11189501_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Taron Egerton",
        "id": "771413912",
        "characters": [
          "Gary \"Eggsy\" Unwin"
        ]
      },
      {
        "name": "Colin Firth",
        "id": "162654659",
        "characters": [
          "Harry Hart"
        ]
      },
      {
        "name": "Mark Hamill",
        "id": "162665747",
        "characters": [
          "Professor Arnold"
        ]
      },
      {
        "name": "Samuel L. Jackson",
        "id": "162652156",
        "characters": [
          "Richmond Valentine"
        ]
      },
      {
        "name": "Jack Davenport",
        "id": "162659479",
        "characters": [
          "Lancelot"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "2802144"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771353298.json",
      "alternate": "http://www.rottentomatoes.com/m/kingsman_the_secret_service/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771353298/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771353298/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771353298/similar.json"
    }
  },
  {
    "id": "771313085",
    "title": "The Equalizer",
    "year": 2014,
    "mpaa_rating": "R",
    "runtime": 131,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-09-26",
      "dvd": "2014-12-30"
    },
    "ratings": {
      "critics_rating": "Fresh",
      "critics_score": 61,
      "audience_rating": "Upright",
      "audience_score": 77
    },
    "synopsis": "In The Equalizer, Denzel Washington plays McCall, a man who believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when McCall meets Teri (Chloe Grace Moretz), a young girl under the control of ultra-violent Russian gangsters, he can't stand idly by - he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer. (c) Sony",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/OKemL-Gfugv5Yi8pEMI58Hgv9S0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/04/11180458_ori.jpg",
      "profile": "http://resizing.flixster.com/OKemL-Gfugv5Yi8pEMI58Hgv9S0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/04/11180458_ori.jpg",
      "detailed": "http://resizing.flixster.com/OKemL-Gfugv5Yi8pEMI58Hgv9S0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/04/11180458_ori.jpg",
      "original": "http://resizing.flixster.com/OKemL-Gfugv5Yi8pEMI58Hgv9S0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/04/11180458_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Denzel Washington",
        "id": "162661439",
        "characters": [
          "Robert McCall"
        ]
      },
      {
        "name": "Marton Csokas",
        "id": "162653240",
        "characters": [
          "Teddy"
        ]
      },
      {
        "name": "Chloe Grace Moretz",
        "id": "771410621",
        "characters": [
          "Teri"
        ]
      },
      {
        "name": "David Harbour",
        "id": "770772702",
        "characters": [
          "Masters"
        ]
      },
      {
        "name": "Bill Pullman",
        "id": "162654131",
        "characters": [
          "Brian Plummer"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0455944"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771313085.json",
      "alternate": "http://www.rottentomatoes.com/m/the_equalizer_2013/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771313085/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771313085/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771313085/similar.json"
    }
  },
  {
    "id": "771372271",
    "title": "The Imitation Game",
    "year": 2014,
    "mpaa_rating": "PG-13",
    "runtime": 114,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-11-28",
      "dvd": "2015-03-31"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 89,
      "audience_rating": "Upright",
      "audience_score": 93
    },
    "synopsis": "During the winter of 1952, British authorities entered the home of mathematician, cryptanalyst and war hero Alan Turing (Benedict Cumberbatch) to investigate a reported burglary. They instead ended up arresting Turing himself on charges of 'gross indecency', an accusation that would lead to his devastating conviction for the criminal offense of homosexuality - little did officials know, they were actually incriminating the pioneer of modern-day computing. Famously leading a motley group of scholars, linguists, chess champions and intelligence officers, he was credited with cracking the so-called unbreakable codes of Germany's World War II Enigma machine. An intense and haunting portrayal of a brilliant, complicated man, THE IMITATION GAME follows a genius who under nail-biting pressure helped to shorten the war and, in turn, save thousands of lives. (c) Weinstein",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/4klIyTlsXZtEbJBcmjW9WsxDCrY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/08/11180871_ori.jpg",
      "profile": "http://resizing.flixster.com/4klIyTlsXZtEbJBcmjW9WsxDCrY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/08/11180871_ori.jpg",
      "detailed": "http://resizing.flixster.com/4klIyTlsXZtEbJBcmjW9WsxDCrY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/08/11180871_ori.jpg",
      "original": "http://resizing.flixster.com/4klIyTlsXZtEbJBcmjW9WsxDCrY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/08/11180871_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Benedict Cumberbatch",
        "id": "355028249",
        "characters": [
          "Alan Turing"
        ]
      },
      {
        "name": "Keira Knightley",
        "id": "162654560",
        "characters": [
          "Joan Clarke"
        ]
      },
      {
        "name": "Allen Leech",
        "id": "599791104",
        "characters": [
          "John Cairncross"
        ]
      },
      {
        "name": "Rory Kinnear",
        "id": "770723110",
        "characters": [
          "Detective Robert Nock"
        ]
      },
      {
        "name": "Mark Strong (II)",
        "id": "478055173",
        "characters": [
          "Stewart Menzies"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "2084970"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771372271.json",
      "alternate": "http://www.rottentomatoes.com/m/the_imitation_game/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771372271/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771372271/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771372271/similar.json"
    }
  },
  {
    "id": "771349837",
    "title": "The Maze Runner",
    "year": 2014,
    "mpaa_rating": "PG-13",
    "runtime": 114,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-09-19",
      "dvd": "2014-12-16"
    },
    "ratings": {
      "critics_rating": "Fresh",
      "critics_score": 63,
      "audience_rating": "Upright",
      "audience_score": 69
    },
    "synopsis": "When Thomas wakes up trapped in a massive maze with a group of other boys, he has no memory of the outside world other than strange dreams about a mysterious organization known as W.C.K.D. Only by piecing together fragments of his past with clues he discovers in the maze can Thomas hope to uncover his true purpose and a way to escape. Based upon the best-selling novel by James Dashner. (c) Fox",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/mwC65fpuXN1e4W21SXXMIfzkBvc=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/91/11189195_ori.jpg",
      "profile": "http://resizing.flixster.com/mwC65fpuXN1e4W21SXXMIfzkBvc=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/91/11189195_ori.jpg",
      "detailed": "http://resizing.flixster.com/mwC65fpuXN1e4W21SXXMIfzkBvc=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/91/11189195_ori.jpg",
      "original": "http://resizing.flixster.com/mwC65fpuXN1e4W21SXXMIfzkBvc=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/91/11189195_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Dylan O'Brien",
        "id": "771375271",
        "characters": [
          "Thomas"
        ]
      },
      {
        "name": "Kaya Scodelario",
        "id": "770803276",
        "characters": [
          "Teresa"
        ]
      },
      {
        "name": "Thomas Brodie-Sangster",
        "id": "771100380",
        "characters": [
          "Newt"
        ]
      },
      {
        "name": "Will Poulter",
        "id": "770791291",
        "characters": [
          "Gally"
        ]
      },
      {
        "name": "Aml Ameen",
        "id": "364640368",
        "characters": [
          "Alby"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "1790864"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771349837.json",
      "alternate": "http://www.rottentomatoes.com/m/the_maze_runner/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771349837/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771349837/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771349837/similar.json"
    }
  },
  {
    "id": "771366367",
    "title": "The Theory of Everything",
    "year": 2014,
    "mpaa_rating": "PG-13",
    "runtime": 123,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-11-07",
      "dvd": "2015-02-17"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 79,
      "audience_rating": "Upright",
      "audience_score": 85
    },
    "synopsis": "Starring Eddie Redmayne (\"Les Miserables\") and Felicity Jones (\"The Amazing Spider-Man 2\"), this is the extraordinary story of one of the world's greatest living minds, the renowned astrophysicist Stephen Hawking, who falls deeply in love with fellow Cambridge student Jane Wilde. Once a healthy, active young man, Hawking received an earth-shattering diagnosis at 21 years of age. With Jane fighting tirelessly by his side, Stephen embarks on his most ambitious scientific work, studying the very thing he now has precious little of - time. Together, they defy impossible odds, breaking new ground in medicine and science, and achieving more than they could ever have dreamed. The film is based on the memoir Travelling to Infinity: My Life with Stephen, by Jane Hawking, and is directed by Academy Award winner James Marsh (\"Man on Wire\"). (c) Focus",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/BI7HY-o4Z2ybr1db7YnbDdFWw-I=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/99/11189903_ori.jpg",
      "profile": "http://resizing.flixster.com/BI7HY-o4Z2ybr1db7YnbDdFWw-I=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/99/11189903_ori.jpg",
      "detailed": "http://resizing.flixster.com/BI7HY-o4Z2ybr1db7YnbDdFWw-I=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/99/11189903_ori.jpg",
      "original": "http://resizing.flixster.com/BI7HY-o4Z2ybr1db7YnbDdFWw-I=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/99/11189903_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Eddie Redmayne",
        "id": "358068995",
        "characters": [
          "Stephen Hawking"
        ]
      },
      {
        "name": "Felicity Jones",
        "id": "770696159",
        "characters": [
          "Jane Wilde"
        ]
      },
      {
        "name": "David Thewlis",
        "id": "162656526",
        "characters": [
          "Dennis Sciama"
        ]
      },
      {
        "name": "Emily Watson",
        "id": "162654016",
        "characters": [
          "Beryl Wilde"
        ]
      },
      {
        "name": "Charlie Cox",
        "id": "392799906",
        "characters": [
          "Jonathan Hellyer Jones"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "2980516"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771366367.json",
      "alternate": "http://www.rottentomatoes.com/m/the_theory_of_everything_2014/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771366367/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771366367/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771366367/similar.json"
    }
  },
  {
    "id": "771373945",
    "title": "Taken 3",
    "year": 2015,
    "mpaa_rating": "PG-13",
    "runtime": 93,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2015-01-09",
      "dvd": "2015-04-21"
    },
    "ratings": {
      "critics_rating": "Rotten",
      "critics_score": 10,
      "audience_rating": "Spilled",
      "audience_score": 48
    },
    "synopsis": "Liam Neeson returns as ex-covert operative Bryan Mills, whose reconciliation with his ex-wife is tragically cut short when she is brutally murdered. Consumed with rage, and framed for the crime, he goes on the run to evade the relentless pursuit of the CIA, FBI and the police. For one last time, Mills must use his \"particular set of skills,\" to track down the real killers, exact his unique brand of justice, and protect the only thing that matters to him now - his daughter. (C) Fox",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/k-YVtTfb6xuHafIp8_5JUqTrCD0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/08/11180817_ori.jpg",
      "profile": "http://resizing.flixster.com/k-YVtTfb6xuHafIp8_5JUqTrCD0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/08/11180817_ori.jpg",
      "detailed": "http://resizing.flixster.com/k-YVtTfb6xuHafIp8_5JUqTrCD0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/08/11180817_ori.jpg",
      "original": "http://resizing.flixster.com/k-YVtTfb6xuHafIp8_5JUqTrCD0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/08/11180817_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Liam Neeson",
        "id": "162652242",
        "characters": [
          "Bryan Mills"
        ]
      },
      {
        "name": "Maggie Grace",
        "id": "162654594",
        "characters": [
          "Kim"
        ]
      },
      {
        "name": "Forest Whitaker",
        "id": "162662640",
        "characters": [
          "Franck Dotzier"
        ]
      },
      {
        "name": "Famke Janssen",
        "id": "162669246",
        "characters": [
          "Lenore"
        ]
      },
      {
        "name": "Dougray Scott",
        "id": "162652857",
        "characters": [
          "Stuart St. John"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "2446042"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771373945.json",
      "alternate": "http://www.rottentomatoes.com/m/taken_3/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771373945/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771373945/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771373945/similar.json"
    }
  },
  {
    "id": "771306778",
    "title": "Tomorrowland",
    "year": 2015,
    "mpaa_rating": "Unrated",
    "runtime": "",
    "release_dates": {
      "theater": "2015-05-22"
    },
    "ratings": {
      "critics_score": -1,
      "audience_score": 98
    },
    "synopsis": "From Disney comes two-time Oscar (R) winner Brad Bird's riveting, mystery adventure \"Tomorrowland,\" starring Academy Award (R) winner George Clooney. Bound by a shared destiny, former boy-genius Frank (Clooney), jaded by disillusionment, and Casey (Britt Robertson), a bright, optimistic teen bursting with scientific curiosity, embark on a danger-filled mission to unearth the secrets of an enigmatic place somewhere in time and space known only as \"Tomorrowland.\" What they must do there changes the world-and them-forever. Featuring a screenplay by \"Lost\" writer and co-creator Damon Lindelof and Brad Bird, from a story by Lindelof & Bird & Jeff Jensen, \"Tomorrowland\" promises to take audiences on a thrill ride of nonstop adventures through new dimensions that have only been dreamed of.(C) Walt Disney",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/KoOEM02GPaflwwyfkF7G6rW9ZR4=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/09/11180915_ori.jpg",
      "profile": "http://resizing.flixster.com/KoOEM02GPaflwwyfkF7G6rW9ZR4=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/09/11180915_ori.jpg",
      "detailed": "http://resizing.flixster.com/KoOEM02GPaflwwyfkF7G6rW9ZR4=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/09/11180915_ori.jpg",
      "original": "http://resizing.flixster.com/KoOEM02GPaflwwyfkF7G6rW9ZR4=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/09/11180915_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "George Clooney",
        "id": "162654528"
      },
      {
        "name": "Hugh Laurie",
        "id": "162746075"
      },
      {
        "name": "Raffey Cassidy",
        "id": "771407744"
      },
      {
        "name": "Brittany Robertson",
        "id": "770687068"
      },
      {
        "name": "Thomas Robinson",
        "id": "770842741"
      }
    ],
    "alternate_ids": {
      "imdb": "1964418"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771306778.json",
      "alternate": "http://www.rottentomatoes.com/m/tomorrowland_2015/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771306778/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771306778/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771306778/similar.json"
    }
  },
  {
    "id": "770672988",
    "title": "Harry Potter and the Half-Blood Prince",
    "year": 2009,
    "mpaa_rating": "PG",
    "runtime": 154,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2009-07-15",
      "dvd": "2009-12-08"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 84,
      "audience_rating": "Upright",
      "audience_score": 77
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/X18BVSQHq3W3F1x1424fP67oAnE=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/39/11163943_ori.jpg",
      "profile": "http://resizing.flixster.com/X18BVSQHq3W3F1x1424fP67oAnE=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/39/11163943_ori.jpg",
      "detailed": "http://resizing.flixster.com/X18BVSQHq3W3F1x1424fP67oAnE=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/39/11163943_ori.jpg",
      "original": "http://resizing.flixster.com/X18BVSQHq3W3F1x1424fP67oAnE=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/39/11163943_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Daniel Radcliffe",
        "id": "162655375",
        "characters": [
          "Harry Potter"
        ]
      },
      {
        "name": "Emma Watson",
        "id": "162655378",
        "characters": [
          "Hermione Granger"
        ]
      },
      {
        "name": "Rupert Grint",
        "id": "162655376",
        "characters": [
          "Ron Weasley"
        ]
      },
      {
        "name": "Tom Felton",
        "id": "400215238",
        "characters": [
          "Draco Malfoy"
        ]
      },
      {
        "name": "Jim Broadbent",
        "id": "162653369",
        "characters": [
          "Professor Horace Slughorn"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0417741"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672988.json",
      "alternate": "http://www.rottentomatoes.com/m/harry_potter_and_the_half_blood_prince/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672988/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672988/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672988/similar.json"
    }
  },
  {
    "id": "771359313",
    "title": "Dumb and Dumber To",
    "year": 2014,
    "mpaa_rating": "PG-13",
    "runtime": 109,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-11-14",
      "dvd": "2015-02-17"
    },
    "ratings": {
      "critics_rating": "Rotten",
      "critics_score": 29,
      "audience_rating": "Spilled",
      "audience_score": 40
    },
    "synopsis": "Jim Carrey and Jeff Daniels reprise their signature roles as Lloyd and Harry in the sequel to the smash hit that took the physical comedy and kicked it in the nuts: Dumb and Dumber To. The original film's directors, Peter and Bobby Farrelly, take Lloyd and Harry on a road trip to find a child Harry never knew he had and the responsibility neither should ever, ever be given. The Farrelly brothers produce Dumb and Dumber To alongside Riza Aziz and Joey McFarland of Red Granite Pictures. They are joined by fellow producers Charles B. Wessler and Bradley Thomas. Universal Pictures will distribute the film in the United States, Canada and select international territories.(C) Universal",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/L46fLlNaCFR91IRmvByEtYz-tko=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/98/11189811_ori.jpg",
      "profile": "http://resizing.flixster.com/L46fLlNaCFR91IRmvByEtYz-tko=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/98/11189811_ori.jpg",
      "detailed": "http://resizing.flixster.com/L46fLlNaCFR91IRmvByEtYz-tko=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/98/11189811_ori.jpg",
      "original": "http://resizing.flixster.com/L46fLlNaCFR91IRmvByEtYz-tko=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/98/11189811_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Jim Carrey",
        "id": "162659418",
        "characters": [
          "Lloyd Christmas"
        ]
      },
      {
        "name": "Jeff Daniels",
        "id": "162654392",
        "characters": [
          "Harry Dunne"
        ]
      },
      {
        "name": "Rob Riggle",
        "id": "770750133",
        "characters": [
          "Travis/Captain Lippincott"
        ]
      },
      {
        "name": "Laurie Holden",
        "id": "326396647",
        "characters": [
          "Adele"
        ]
      },
      {
        "name": "Rachel Melvin",
        "id": "770753036",
        "characters": [
          "Penny"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "2096672"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771359313.json",
      "alternate": "http://www.rottentomatoes.com/m/dumb_and_dumber_to/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771359313/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771359313/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771359313/similar.json"
    }
  },
  {
    "id": "769964099",
    "title": "Indiana Jones and the Kingdom of the Crystal Skull",
    "year": 2008,
    "mpaa_rating": "PG-13",
    "runtime": 122,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2008-05-22",
      "dvd": "2008-10-14"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 78,
      "audience_rating": "Spilled",
      "audience_score": 54
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/mGYaGwmoZ7s_14t6Q4-y_AdnQXQ=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/86/88/10868884_ori.jpg",
      "profile": "http://resizing.flixster.com/mGYaGwmoZ7s_14t6Q4-y_AdnQXQ=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/86/88/10868884_ori.jpg",
      "detailed": "http://resizing.flixster.com/mGYaGwmoZ7s_14t6Q4-y_AdnQXQ=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/86/88/10868884_ori.jpg",
      "original": "http://resizing.flixster.com/mGYaGwmoZ7s_14t6Q4-y_AdnQXQ=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/10/86/88/10868884_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Harrison Ford",
        "id": "162661579",
        "characters": [
          "Indiana Jones"
        ]
      },
      {
        "name": "Shia LaBeouf",
        "id": "162654215",
        "characters": [
          "Mutt Williams"
        ]
      },
      {
        "name": "Cate Blanchett",
        "id": "162659162",
        "characters": [
          "Col. Irina Spalko"
        ]
      },
      {
        "name": "Karen Allen",
        "id": "162666714",
        "characters": [
          "Marion Ravenwood"
        ]
      },
      {
        "name": "John Hurt",
        "id": "162653221",
        "characters": [
          "Prof. Oxley"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0367882"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/769964099.json",
      "alternate": "http://www.rottentomatoes.com/m/indiana_jones_and_the_kingdom_of_the_crystal_skull/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/769964099/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/769964099/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/769964099/similar.json"
    }
  },
  {
    "id": "771323152",
    "title": "The Book of Life",
    "year": 2014,
    "mpaa_rating": "PG",
    "runtime": 95,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-10-17",
      "dvd": "2015-01-27"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 82,
      "audience_rating": "Upright",
      "audience_score": 79
    },
    "synopsis": "THE BOOK OF LIFE, a vibrant fantasy-adventure, tells the legend of Manolo, a conflicted hero and dreamer who sets off on an epic quest through magical, mythical and wondrous worlds in order to rescue his one true love and defend his village. (c) Fox",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/Jg7zjBbfww4-MDrauwj1UtQ1ANk=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/95/11189529_ori.jpg",
      "profile": "http://resizing.flixster.com/Jg7zjBbfww4-MDrauwj1UtQ1ANk=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/95/11189529_ori.jpg",
      "detailed": "http://resizing.flixster.com/Jg7zjBbfww4-MDrauwj1UtQ1ANk=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/95/11189529_ori.jpg",
      "original": "http://resizing.flixster.com/Jg7zjBbfww4-MDrauwj1UtQ1ANk=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/95/11189529_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Channing Tatum",
        "id": "162661835"
      },
      {
        "name": "Zoe Saldana",
        "id": "162660050"
      },
      {
        "name": "Diego Luna",
        "id": "162663833"
      },
      {
        "name": "Christina Applegate",
        "id": "162663389"
      },
      {
        "name": "Ice Cube",
        "id": "162652332"
      }
    ],
    "alternate_ids": {
      "imdb": "2262227"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771323152.json",
      "alternate": "http://www.rottentomatoes.com/m/the_book_of_life_2014/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771323152/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771323152/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771323152/similar.json"
    }
  },
  {
    "id": "462983441",
    "title": "Ocean's Thirteen",
    "year": 2007,
    "mpaa_rating": "PG-13",
    "runtime": 122,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2007-06-08",
      "dvd": "2007-11-13"
    },
    "ratings": {
      "critics_rating": "Fresh",
      "critics_score": 70,
      "audience_rating": "Upright",
      "audience_score": 75
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/RZykfvPDmIE0g7DouMy0ljYoqQw=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/39/11173929_ori.jpg",
      "profile": "http://resizing.flixster.com/RZykfvPDmIE0g7DouMy0ljYoqQw=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/39/11173929_ori.jpg",
      "detailed": "http://resizing.flixster.com/RZykfvPDmIE0g7DouMy0ljYoqQw=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/39/11173929_ori.jpg",
      "original": "http://resizing.flixster.com/RZykfvPDmIE0g7DouMy0ljYoqQw=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/39/11173929_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "George Clooney",
        "id": "162654528",
        "characters": [
          "Danny Ocean"
        ]
      },
      {
        "name": "Brad Pitt",
        "id": "162652627",
        "characters": [
          "Rusty Ryan"
        ]
      },
      {
        "name": "Matt Damon",
        "id": "162653499",
        "characters": [
          "Linus Caldwell/Lenny Pepperidge"
        ]
      },
      {
        "name": "Bernie Mac",
        "id": "162660049",
        "characters": [
          "Frank Catton"
        ]
      },
      {
        "name": "Don Cheadle",
        "id": "162652206",
        "characters": [
          "Basher Tarr/Fender Roads"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0496806"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/462983441.json",
      "alternate": "http://www.rottentomatoes.com/m/oceans_thirteen/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/462983441/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/462983441/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/462983441/similar.json"
    }
  },
  {
    "id": "771350092",
    "title": "The Boxtrolls",
    "year": 2014,
    "mpaa_rating": "PG",
    "runtime": 97,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-09-26",
      "dvd": "2015-01-20"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 75,
      "audience_rating": "Upright",
      "audience_score": 65
    },
    "synopsis": "A family event movie from the creators of \"Coraline\" and \"ParaNorman\" that introduces audiences to a new breed of family - The Boxtrolls, a community of quirky, mischievous creatures who have lovingly raised an orphaned human boy named Eggs (voiced by Isaac Hempstead-Wright) in the amazing cavernous home they've built beneath the streets of Cheesebridge. When the town's villain, Archibald Snatcher (Academy Award winner Ben Kingsley), comes up with a plot to get rid of the Boxtrolls, Eggs decides to venture above ground, \"into the light,\" where he meets and teams up with fabulously feisty Winnifred (Elle Fanning). Together, they devise a daring plan to save Eggs' family. Directors: Anthony Staachi and Graham Annable. (C) Focus",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/UfKT2CYMAkq1JtGPBTGOSHsuiQ0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/99/11179940_ori.jpg",
      "profile": "http://resizing.flixster.com/UfKT2CYMAkq1JtGPBTGOSHsuiQ0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/99/11179940_ori.jpg",
      "detailed": "http://resizing.flixster.com/UfKT2CYMAkq1JtGPBTGOSHsuiQ0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/99/11179940_ori.jpg",
      "original": "http://resizing.flixster.com/UfKT2CYMAkq1JtGPBTGOSHsuiQ0=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/99/11179940_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Ben Kingsley",
        "id": "162653703",
        "characters": [
          "Archibald Snatcher"
        ]
      },
      {
        "name": "Toni Collette",
        "id": "162654444",
        "characters": [
          "Lady Portley-Rind"
        ]
      },
      {
        "name": "Elle Fanning",
        "id": "528361349",
        "characters": [
          "Winnie"
        ]
      },
      {
        "name": "Isaac Hempstead-Wright",
        "id": "771398908",
        "characters": [
          "Eggs"
        ]
      },
      {
        "name": "Jared Harris",
        "id": "162676363",
        "characters": [
          "Lord Portley-Rind"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "0787474"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771350092.json",
      "alternate": "http://www.rottentomatoes.com/m/the_boxtrolls/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771350092/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771350092/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771350092/similar.json"
    }
  },
  {
    "id": "771353029",
    "title": "The Judge",
    "year": 2014,
    "mpaa_rating": "R",
    "runtime": 142,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-10-10",
      "dvd": "2015-01-27"
    },
    "ratings": {
      "critics_rating": "Rotten",
      "critics_score": 47,
      "audience_rating": "Upright",
      "audience_score": 73
    },
    "synopsis": "In \"The Judge,\" Robert Downey Jr. stars as big city lawyer Hank Palmer, who returns to his childhood home where his estranged father, the town's judge (Robert Duvall), is suspected of murder. He sets out to discover the truth and along the way reconnects with the family he walked away from years before. -- (C) Warner Bros.",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/zarJRDNsZHIwsfMERLkuBgRHXBc=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/88/11178883_ori.jpg",
      "profile": "http://resizing.flixster.com/zarJRDNsZHIwsfMERLkuBgRHXBc=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/88/11178883_ori.jpg",
      "detailed": "http://resizing.flixster.com/zarJRDNsZHIwsfMERLkuBgRHXBc=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/88/11178883_ori.jpg",
      "original": "http://resizing.flixster.com/zarJRDNsZHIwsfMERLkuBgRHXBc=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/88/11178883_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Robert Downey Jr.",
        "id": "162654529",
        "characters": [
          "Hank Palmer"
        ]
      },
      {
        "name": "Robert Duvall",
        "id": "162652186",
        "characters": [
          "Joseph Palmer"
        ]
      },
      {
        "name": "Vera Farmiga",
        "id": "162655572",
        "characters": [
          "Samantha Powell"
        ]
      },
      {
        "name": "Vincent D'Onofrio",
        "id": "162654048",
        "characters": [
          "Glen Palmer"
        ]
      },
      {
        "name": "Billy Bob Thornton",
        "id": "162652889",
        "characters": [
          "Dwight Dickham"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "1872194"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771353029.json",
      "alternate": "http://www.rottentomatoes.com/m/the_judge_2014/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771353029/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771353029/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771353029/similar.json"
    }
  },
  {
    "id": "771353053",
    "title": "The Interview",
    "year": 2014,
    "mpaa_rating": "R",
    "runtime": 112,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2014-12-25",
      "dvd": "2015-02-17"
    },
    "ratings": {
      "critics_rating": "Rotten",
      "critics_score": 52,
      "audience_rating": "Spilled",
      "audience_score": 51
    },
    "synopsis": "In the action-comedy The Interview, Dave Skylark (James Franco) and his producer Aaron Rapoport (Seth Rogen) run the popular celebrity tabloid TV show \"Skylark Tonight.\" When they discover that North Korean dictator Kim Jong-un is a fan of the show, they land an interview with him in an attempt to legitimize themselves as journalists. As Dave and Aaron prepare to travel to Pyongyang, their plans change when the CIA recruits them, perhaps the two least-qualified men imaginable, to assassinate Kim Jong-un. (c) Sony",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/V8dFU3ZGCCFd2Oq3LImJ_E6jGII=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/99/11189913_ori.jpg",
      "profile": "http://resizing.flixster.com/V8dFU3ZGCCFd2Oq3LImJ_E6jGII=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/99/11189913_ori.jpg",
      "detailed": "http://resizing.flixster.com/V8dFU3ZGCCFd2Oq3LImJ_E6jGII=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/99/11189913_ori.jpg",
      "original": "http://resizing.flixster.com/V8dFU3ZGCCFd2Oq3LImJ_E6jGII=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/99/11189913_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Seth Rogen",
        "id": "162653310"
      },
      {
        "name": "James Franco",
        "id": "162653202"
      },
      {
        "name": "Lizzy Caplan",
        "id": "347990526"
      },
      {
        "name": "Randall Park",
        "id": "770767249"
      },
      {
        "name": "Timothy Simons",
        "id": "771437833"
      }
    ],
    "alternate_ids": {
      "imdb": "2788710"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771353053.json",
      "alternate": "http://www.rottentomatoes.com/m/the_interview_2014/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771353053/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771353053/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771353053/similar.json"
    }
  },
  {
    "id": "771359910",
    "title": "Terminator Genisys",
    "year": 2015,
    "mpaa_rating": "Unrated",
    "runtime": "",
    "release_dates": {
      "theater": "2015-07-01"
    },
    "ratings": {
      "critics_score": -1,
      "audience_score": 98
    },
    "synopsis": "James Cameron's sci-fi classic gets rebooted in this Paramount production designed as the first installment in a new trilogy. ~ Jason Buchanan, Rovi",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/RtGK34_DZPWwTvwrQ6q3nbraVkY=/54x79/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/18/11181810_ori.jpg",
      "profile": "http://resizing.flixster.com/RtGK34_DZPWwTvwrQ6q3nbraVkY=/54x79/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/18/11181810_ori.jpg",
      "detailed": "http://resizing.flixster.com/RtGK34_DZPWwTvwrQ6q3nbraVkY=/54x79/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/18/11181810_ori.jpg",
      "original": "http://resizing.flixster.com/RtGK34_DZPWwTvwrQ6q3nbraVkY=/54x79/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/18/11181810_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Emilia Clarke",
        "id": "771370354",
        "characters": [
          "Sarah Connor"
        ]
      },
      {
        "name": "Jason Clarke",
        "id": "359854726",
        "characters": [
          "John Connor"
        ]
      },
      {
        "name": "Jai Courtney",
        "id": "771383833",
        "characters": [
          "Kyle Reese"
        ]
      },
      {
        "name": "Arnold Schwarzenegger",
        "id": "162662233",
        "characters": [
          "The Terminator"
        ]
      },
      {
        "name": "Dayo Okeniyi",
        "id": "771101599"
      }
    ],
    "alternate_ids": {
      "imdb": "1340138"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771359910.json",
      "alternate": "http://www.rottentomatoes.com/m/terminator_genisys/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771359910/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771359910/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771359910/similar.json"
    }
  },
  {
    "id": "771361762",
    "title": "The SpongeBob Movie: Sponge Out of Water",
    "year": 2015,
    "mpaa_rating": "PG",
    "runtime": 100,
    "critics_consensus": "",
    "release_dates": {
      "theater": "2015-02-06"
    },
    "ratings": {
      "critics_rating": "Certified Fresh",
      "critics_score": 75,
      "audience_rating": "Upright",
      "audience_score": 61
    },
    "synopsis": "SpongeBob SquarePants, the world's favorite sea dwelling invertebrate, comes ashore to our world for his most super-heroic adventure yet.(C) Paramount Pictures",
    "posters": {
      "thumbnail": "http://resizing.flixster.com/3m2svG9fa1-bZvMdiIwE_0jBKeU=/54x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/90/11189077_ori.jpg",
      "profile": "http://resizing.flixster.com/3m2svG9fa1-bZvMdiIwE_0jBKeU=/54x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/90/11189077_ori.jpg",
      "detailed": "http://resizing.flixster.com/3m2svG9fa1-bZvMdiIwE_0jBKeU=/54x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/90/11189077_ori.jpg",
      "original": "http://resizing.flixster.com/3m2svG9fa1-bZvMdiIwE_0jBKeU=/54x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/90/11189077_ori.jpg"
    },
    "abridged_cast": [
      {
        "name": "Tom Kenny",
        "id": "162663804",
        "characters": [
          "SpongeBob SquarePants/Gary/Waffle/Agreeable Mob Member"
        ]
      },
      {
        "name": "Bill Fagerbakke",
        "id": "341817707",
        "characters": [
          "Patrick Star/Male Fish/Eager Customer"
        ]
      },
      {
        "name": "Rob Paulsen",
        "id": "162656863",
        "characters": [
          "Seagull"
        ]
      },
      {
        "name": "Rodger Bumpass",
        "id": "162663807",
        "characters": [
          "Squidward Tentacles/Doctor/Angry Mob Member #2/Doughnut/Squi"
        ]
      },
      {
        "name": "Clancy Brown",
        "id": "162663805",
        "characters": [
          "Mr. Krabs"
        ]
      }
    ],
    "alternate_ids": {
      "imdb": "2279373"
    },
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771361762.json",
      "alternate": "http://www.rottentomatoes.com/m/the_spongebob_movie_sponge_out_of_water/",
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/771361762/cast.json",
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/771361762/reviews.json",
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/771361762/similar.json"
    }
  }
]);

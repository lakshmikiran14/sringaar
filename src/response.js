const response = {
  articles: [
    {
      author: 'Kamuju Srujan',
      date: '09/30/2020 10:00 PM',
      key_words: [
        'shark',
        'tanks',
        'destroyed',
        'in',
        'tasks',
        'in',
        'midnight',
        'organs',
        'across',
        'the',
        'of',
        'the',
        'arguments',
        'machine',
        'machine',
      ],
      publisher: 'NY times',
      title:
        'shark tanks destroyed in tasks in midnight organs across the of the arguments machine machine',
    },
    {
      author: 'Kamuju Srujan',
      date: '06/25/2020 12:27 PM',
      key_words: [
        'peter',
        'an',
        'billionaire',
        'the',
        'departing',
        'and',
        'one',
        'of',
        'to',
        'settle',
        'to',
        'be',
        'in',
        'lockheed',
        'in',
        'background',
      ],
      publisher: 'NY times',
      title:
        'peter an billionaire the departing and one of to settle to be in lockheed in background',
    },
    {
      author: 'Kamuju Srujan',
      date: '03/31/2020 10:57 PM',
      key_words: [
        'maria',
        'jeffrey',
        'green',
        'of',
        'of',
        'poster',
        'by',
        'village',
        'artists',
        'to',
        'the',
        'the',
        'period',
        'a',
        'yogurt',
        'eos',
      ],
      publisher: 'NY times',
      title:
        'maria jeffrey green of of poster by village artists to the the period a yogurt eos',
    },
    {
      author: 'Kamuju Srujan',
      date: '02/06/2020 11:11 AM',
      key_words: [
        'the',
        'left',
        'the',
        'radical',
        'of',
        'division',
        'opponent',
        'a',
        'artists',
        'by',
        'left',
        'left',
        'left',
        'theory',
        'miss',
        'voice',
        'eos',
      ],
      publisher: 'NY times',
      title:
        'the left the radical of division opponent a artists by left left left theory miss voice eos',
    },
    {
      author: 'Kamuju Srujan',
      date: '08/13/2020 11:50 PM',
      key_words: [
        'mets',
        'director',
        'aide',
        'to',
        'is',
        'to',
        'the',
        'the',
        'the',
        'fossil',
        'the',
        'the',
        'and',
        'and',
        'nordstrom',
        'nordstrom',
        'at',
        'doomed',
      ],
      publisher: 'NY times',
      title:
        'mets director aide to is to the the the fossil the the and and nordstrom nordstrom at doomed',
    },
    {
      author: 'Kamuju Srujan',
      date: '01/23/2020 05:20 AM',
      key_words: [
        'illegal',
        'control',
        'antibiotic',
        'to',
        'to',
        'to',
        'inequality',
        'new',
        'head',
        'head',
        'becoming',
        'sports',
        'and',
        'rejection',
      ],
      publisher: 'NY times',
      title:
        'illegal control antibiotic to to to inequality new head head becoming sports and rejection',
    },
    {
      author: 'Kamuju Srujan',
      date: '09/23/2020 07:13 PM',
      key_words: [
        'mistrial',
        'quarterback',
        'was',
        'was',
        'the',
        'the',
        'dark',
        'with',
        'in',
        'reddit',
        'mexico',
        'cloud',
        'lord',
        'knife',
        'during',
        'hawaii',
      ],
      publisher: 'NY times',
      title:
        'mistrial quarterback was was the the dark with in reddit mexico cloud lord knife during hawaii',
    },
    {
      author: 'Kamuju Srujan',
      date: '08/26/2020 06:20 AM',
      key_words: [
        'ive',
        'had',
        'visited',
        'a',
        'a',
        'founded',
        'with',
        'founded',
        'with',
        'body',
        'a',
        'a',
        'test',
        'a',
        'the',
        'mic',
        'verdict',
        'eos',
      ],
      publisher: 'NY times',
      title:
        'ive had visited a a founded with founded with body a a test a the mic verdict eos',
    },
    {
      author: 'Kamuju Srujan',
      date: '01/15/2020 09:31 AM',
      key_words: [
        'trumps',
        'trumps',
        'adviser',
        'caused',
        'lord',
        'to',
        'the',
        'turning',
        'the',
        'the',
        'wrote',
        'and',
        'flanked',
        'and',
        'a',
        'doomed',
        'of',
        'doomed',
        'doomed',
      ],
      publisher: 'NY times',
      title:
        'trumps trumps adviser caused lord to the turning the the wrote and flanked and a doomed of doomed doomed',
    },
    {
      author: 'Kamuju Srujan',
      date: '11/23/2020 05:20 AM',
      key_words: [
        'obama',
        'media',
        'jeff',
        'claim',
        'president',
        'the',
        'most',
        'in',
        'workers',
        'of',
        'of',
        'criticizing',
        'with',
        'with',
        'with',
        'with',
        'with',
        'eos',
      ],
      publisher: 'NY times',
      title:
        'obama media jeff claim president the most in workers of of criticizing with with with with with eos',
    },
  ],
};

export default response;

// function Popular_News() {
//   const [Response, ChangeResponseState] = useState(false);
//   const [response_data, changeResponseData] = useState({ articles: [] });

//   useEffect(() => {
//     fetchData();
//   });

//   // let getData = () => {
//   //   fetch(API)
//   //     .then((response) => {
//   //       return response.json();
//   //     })
//   //     .then((data) => {
//   //       changeResponseData(data);
//   //       ChangeResponseState(true);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //       // changeResponseData(response);
//   //       // ChangeResponseState(true);
//   //     });
//   // };

//   return (
//     <div>
//       {Response ? (
//         response_data['articles'].map((article) => (
//           <Article
//             title={article.title}
//             publisher={article.publisher}
//             date={article.date}
//             author={article.author}
//             key_words={article.key_words}
//           />
//         ))
//       ) : (
//         <div> Waiting</div>
//       )}
//     </div>
//   );
// }

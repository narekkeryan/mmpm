import React, { Component } from 'react';
import './Inquiry.css';

const images = require.context('../resources', true, /\.(png|jpe?g)$/);

class Inquiry extends Component {
    constructor(props) {
        super(props);
        this.timer = 0;
        this.state = {
            data: [],
            chosen: [],
            chosenClass: [],
            seconds: 10*60,
            procent: 0,
            correctCount: 0,
            wrongCount: 0,
            correctChosenCount: 0,
            wrongChosenCount: 0,
            allCount: 0,
            points: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.setChosenClass = this.setChosenClass.bind(this);
        this.getChosenClass = this.getChosenClass.bind(this);
        this.countPoints = this.countPoints.bind(this);
        // this.countProcent = this.countProcent.bind(this);
    }

    componentDidMount() {
        // set data
        const data = [
            {
                question: './0.png',
                options: [
                    './1.png',
                    './2.png',
                    './3.png',
                    './4.png'
                ],
                answers: [0, 1, 3]
            },
            {
                question: './5.png',
                options: [
                    './6.png',
                    './7.png',
                    './8.png',
                    './9.png'
                ],
                answers: [0, 1]
            },
            {
                question: './10.png',
                options: [
                    './11.png',
                    './12.png',
                    './13.png',
                    './14.png'
                ],
                answers: [0, 1, 2, 3]
            },
            {
                question: './15.png',
                options: [
                    './16.png',
                    './17.png',
                    './18.png',
                    './19.png'
                ],
                answers: [1]
            },
            {
                question: './20.png',
                options: [
                    './21.png',
                    './22.png',
                    './23.png',
                    './24.png'
                ],
                answers: [0, 1, 3]
            },
            {
                question: './25.png',
                options: [
                    './26.png',
                    './27.png',
                    './28.png',
                    './29.png'
                ],
                answers: [1, 2, 3]
            },
            {
                question: './30.png',
                options: [
                    './31.png',
                    './32.png',
                    './33.png',
                    './34.png'
                ],
                answers: [1, 3]
            },
            {
                question: './35.png',
                options: [
                    './36.png',
                    './37.png',
                    './38.png',
                    './39.png'
                ],
                answers: [0, 1, 2]
            },
            {
                question: './40.png',
                options: [
                    './41.png',
                    './42.png',
                    './43.png',
                    './44.png'
                ],
                answers: [1]
            },
            {
              question: './45.png',
              options: [
                  './46.png',
                  './47.png',
                  './48.png',
                  './49.png'
              ],
              answers: [3]
            },
            {
              question: './50.png',
              options: [
                  './51.png',
                  './52.png',
                  './53.png',
                  './54.png'
              ],
              answers: [0, 2]
            },
            {
              question: './55.png',
              options: [
                  './56.png',
                  './57.png',
                  './58.png',
                  './59.png'
              ],
              answers: [1, 2, 3]
            },
            {
              question: './60.png',
              options: [
                './61.png',
                './62.png',
                './63.png',
                './64.png'
              ],
              answers: [1, 3]
            },
            {
              question: './65.png',
              options: [
                './66.png',
                './67.png',
                './68.png',
                './69.png'
              ],
              answers: [0, 3]
            },
            {
              question: './70.png',
              options: [
                './71.png',
                './72.png',
                './73.png',
                './74.png'
              ],
              answers: [1]
            },
            {
              question: './75.png',
              options: [
                './76.png',
                './77.png',
                './78.png',
                './79.png'
              ],
              answers: [0, 1, 3]
            },
            {
              question: './80.png',
              options: [
                './81.png',
                './82.png',
                './83.png',
                './84.png'
              ],
              answers: [1, 3]
            },
            {
              question: './85.png',
              options: [
                './86.png',
                './87.png',
                './88.png',
                './89.png'
              ],
              answers: [2, 3]
            },
            {
              question: './90.png',
              options: [
                './91.png',
                './92.png',
                './93.png',
                './94.png'
              ],
              answers: [2, 3]
            },
            {
              question: './95.png',
              options: [
                './96.png',
                './97.png',
                './98.png',
                './99.png'
              ],
              answers: [0]
            },
            {
              question: './100.png',
              options: [
                './101.png',
                './102.png',
                './103.png',
                './104.png'
              ],
              answers: [1, 2]
            },
            {
              question: './105.png',
              options: [
                './106.png',
                './107.png',
                './108.png',
                './109.png'
              ],
              answers: [3]
            },
            {
              question: './110.png',
              options: [
                './111.png',
                './112.png',
                './113.png',
                './114.png'
              ],
              answers: [0, 1]
            },
            {
              question: './115.png',
              options: [
                './116.png',
                './117.png',
                './118.png',
                './119.png'
              ],
              answers: [3]
            },
            {
              question: './120.png',
              options: [
                './121.png',
                './122.png',
                './123.png',
                './124.png'
              ],
              answers: [0, 1]
            },
            {
              question: './125.png',
              options: [
                './126.png',
                './127.png',
                './128.png',
                './129.png'
              ],
              answers: [0, 1, 3]
            },
            {
              question: './130.png',
              options: [
                './131.png',
                './132.png',
                './133.png',
                './134.png'
              ],
              answers: [1, 2]
            },
            {
              question: './135.png',
              options: [
                './136.png',
                './137.png',
                './138.png',
                './139.png'
              ],
              answers: [3]
            },
            {
              question: './140.png',
              options: [
                './141.png',
                './142.png',
                './143.png',
                './144.png'
              ],
              answers: [0, 2, 3]
            },
            {
              question: './145.png',
              options: [
                './146.png',
                './147.png',
                './148.png',
                './149.png'
              ],
              answers: [1, 2]
            },
            {
              question: './150.png',
              options: [
                './151.png',
                './152.png',
                './153.png',
                './154.png'
              ],
              answers: [3]
            },
            {
              question: './155.png',
              options: [
                './156.png',
                './157.png',
                './158.png',
                './159.png'
              ],
              answers: [0]
            },
            {
              question: './160.png',
              options: [
                './161.png',
                './162.png',
                './163.png',
                './164.png'
              ],
              answers: [0, 3]
            },
            {
              question: './165.png',
              options: [
                './166.png',
                './167.png',
                './168.png',
                './169.png'
              ],
              answers: [0, 2]
            },
            {
              question: './170.png',
              options: [
                './171.png',
                './172.png',
                './173.png',
                './174.png'
              ],
              answers: [1, 2]
            },
            {
              question: './175.png',
              options: [
                './176.png',
                './177.png',
                './178.png',
                './179.png'
              ],
              answers: [0]
            },
            {
              question: './180.png',
              options: [
                './181.png',
                './182.png',
                './183.png',
                './184.png'
              ],
              answers: [3]
            },
            {
              question: './185.png',
              options: [
                './186.png',
                './187.png',
                './188.png',
                './189.png'
              ],
              answers: [1, 2, 3]
            },
            {
              question: './190.png',
              options: [
                './191.png',
                './192.png',
                './193.png',
                './194.png'
              ],
              answers: [0, 1, 2, 3]
            },
            {
              question: './195.png',
              options: [
                './196.png',
                './197.png',
                './198.png',
                './199.png'
              ],
              answers: [0]
            },
            {
              question: './200.png',
              options: [
                './201.png',
                './202.png',
                './203.png',
                './204.png'
              ],
              answers: [0, 1]
            },
            {
              question: './205.png',
              options: [
                './206.png',
                './207.png',
                './208.png',
                './209.png'
              ],
              answers: [1]
            },
            {
              question: './210.png',
              options: [
                './211.png',
                './212.png',
                './213.png',
                './214.png'
              ],
              answers: [1]
            },
            {
              question: './215.png',
              options: [
                './216.png',
                './217.png',
                './218.png',
                './219.png'
              ],
              answers: [2, 3]
            },
            {
              question: './220.png',
              options: [
                './221.png',
                './222.png',
                './223.png',
                './224.png'
              ],
              answers: [1, 3]
            },
            {
              question: './225.png',
              options: [
                './226.png',
                './227.png',
                './228.png',
                './229.png'
              ],
              answers: [0, 3]
            },
            {
              question: './230.png',
              options: [
                './231.png',
                './232.png',
                './233.png',
                './234.png'
              ],
              answers: [1, 3]
            },
            {
              question: './235.png',
              options: [
                './236.png',
                './237.png',
                './238.png',
                './239.png'
              ],
              answers: [0, 2, 3]
            },
            {
              question: './240.png',
              options: [
                './241.png',
                './242.png',
                './243.png',
                './244.png'
              ],
              answers: [0, 1, 2]
            }
        ];
        this.setState({ data },);

        // set counts
        let allCount = 0;
        let correctCount = 0;
        for (let each of data) {
            allCount += 4;
            correctCount += each.answers.length;
        }
        this.setState({ correctCount, wrongCount: allCount - correctCount, allCount },);

        // init timer
        this.timer = setInterval(() => {
            if (this.state.seconds > 0 && this.state.correctCount !== this.state.correctChosenCount)
                this.setState({ seconds: this.state.seconds - 1 },);
            else if (this.state.seconds === 0)
                clearInterval(this.timer);
        }, 1000);
    }

    handleClick(e) {
        if (this.state.seconds && this.state.correctCount !== this.state.correctChosenCount) {
            const data = this.state.data;
            const key = Number(e.target.getAttribute('data-key'));
            const optionKey = Number(e.target.getAttribute('data-option-key'));

            // count procent
            // this.countProcent(key, optionKey);

            // count points
            this.countPoints(key, optionKey);

            // set chosen
            let chosen = this.state.chosen;
            chosen[key] = chosen[key] && !chosen[key].includes(optionKey)
                        ? [...chosen[key], optionKey]
                        : chosen[key] ? chosen[key] : [optionKey];
            this.setState({ chosen },);

            // set chosenClass
            this.setChosenClass(key, optionKey);
        }
    }

    setChosenClass(key, optionKey) {
        const data = this.state.data;
        const chosen = this.state.chosen;
        
        let chosenClass = this.state.chosenClass;
        if (!chosenClass[key]) chosenClass[key] = [];

        if (chosen[key] && chosen[key].includes(optionKey)) {
            if (data[key].answers.includes(optionKey)) {
                chosenClass[key][optionKey] = 'correct';
                return this.setState({ chosenClass },);
            }

            chosenClass[key][optionKey] = 'wrong';
            return this.setState({ chosenClass },);
        }

        chosenClass[key][optionKey] = '';
        this.setState({ chosenClass },);
    }

    getChosenClass(key, optionKey) {
        return this.state.chosenClass[key] && this.state.chosenClass[key][optionKey];
    }

    countPoints(key, optionKey) {
       const data = this.state.data;
      const chosen = this.state.chosen;
      
      /* const correctCount = this.state.correctCount;
      const wrongCount = this.state.wrongCount; */
      let correctChosenCount = this.state.correctChosenCount;
      let wrongChosenCount = this.state.wrongChosenCount;

      if (!chosen[key] || (chosen[key] && !chosen[key].includes(optionKey))) {
        if (data[key].answers.includes(optionKey)) {
            correctChosenCount++;
            this.setState({ correctChosenCount });
        } else {
          wrongChosenCount++;
          this.setState({ wrongChosenCount });
        }

        if (correctChosenCount - wrongChosenCount >= 128) {
          this.setState({ points: 10 });
        } else if (correctChosenCount - wrongChosenCount >= 103) {
          this.setState({ points: 9 });
        } else if (correctChosenCount - wrongChosenCount >= 88) {
          this.setState({ points: 8 });
        } else if (correctChosenCount - wrongChosenCount >= 80) {
          this.setState({ points: 7 });
        } else if (correctChosenCount - wrongChosenCount >= 72) {
          this.setState({ points: 6 });
        } else if (correctChosenCount - wrongChosenCount >= 64) {
          this.setState({ points: 5 });
        } else if (correctChosenCount - wrongChosenCount >= 57) {
          this.setState({ points: 4 });
        } else if (correctChosenCount - wrongChosenCount >= 50) {
          this.setState({ points: 3 });
        } else if (correctChosenCount - wrongChosenCount >= 41) {
          this.setState({ points: 2 });
        } else if (correctChosenCount - wrongChosenCount >= 26) {
          this.setState({ points: 1 });
        }
      }
    }

    /* countProcent(key, optionKey) {
        const data = this.state.data;
        const chosen = this.state.chosen;
        
        const correctCount = this.state.correctCount;
        const wrongCount = this.state.wrongCount;
        let procent = this.state.procent;
        let correctChosenCount = this.state.correctChosenCount;

        if (!chosen[key] || (chosen[key] && !chosen[key].includes(optionKey))) {
            if (data[key].answers.includes(optionKey)) {
                correctChosenCount++;
                procent += 100 / correctCount;
                return this.setState({ procent, correctChosenCount },);
            }

            procent -= 100 / wrongCount;
            return this.setState({ procent },);
        }
    } */

    render() {
        const data = this.state.data;

        return (<>
            <div className="info">
              {/* this.state.procent.toFixed(2)} | */}
              seconds: {this.state.seconds} |
              <span style={{color: "green"}}> correct: {this.state.correctChosenCount}</span> |
              <span style={{color: "red"}}> wrong: {this.state.wrongChosenCount}</span> |
              points: {this.state.points}
            </div> 
            <div className="inquiry">
                { data.map((item, key) => (
                    <div key={key} className="inquiry-block">
                        <div className="inquiry-block-left">
                            <img src={images(item.question)} alt="Question 1"/>
                        </div>
                        <div className="inquiry-block-right">
                            { item.options.map((src, optionKey) => (
                                <img key={optionKey} src={images(src)} alt={"Option " + (optionKey + 1)} className={this.getChosenClass(key, optionKey)} data-key={key} data-option-key={optionKey} onClick={this.handleClick} />
                            )) }
                        </div>
                    </div>
                )) },
            </div>
        </>);
    }
}

export default Inquiry;
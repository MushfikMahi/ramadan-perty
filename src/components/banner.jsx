import { useState, useEffect } from 'react';


const Banner = () => {

  const [hours, setHours] = useState(() => parseInt(localStorage.getItem('countdownHours')) || 9);
  const [minutes, setMinutes] = useState(() => parseInt(localStorage.getItem('countdownMinutes')) || 15);
  const [seconds, setSeconds] = useState(() => parseInt(localStorage.getItem('countdownSeconds')) || 17);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            clearInterval(interval);
            // Handle countdown completion here
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  useEffect(() => {
    localStorage.setItem('countdownHours', hours);
    localStorage.setItem('countdownMinutes', minutes);
    localStorage.setItem('countdownSeconds', seconds);
  }, [hours, minutes, seconds]);



  return (
    <div>
      <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/Hqs54LH/golden.png)' }}>
        <div className="hero-content text-center text-white">
          <div className="p-5 md:max-w-md my-24">
            {/* countdown start */}
            <div className="grid grid-flow-col gap-5 items-center justify-center mb-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">0{hours}</span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">{minutes}</span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">{seconds}</span>
                sec
              </div>
            </div>
            {/* countdown ends */}
            <h2 className="mb-5 text-5xl font-bold text-black">Iftar Party</h2>
            <p className="mb-5  text-xl text-black">আসসালামুআলাইকুম আমরা সবাই মিলে ২৫ মার্চ ইফতার করছি <span className="font-bold text-xl">CRB</span> তে তুমি যদি জয়েন হতে চাও আমাদের সাথে তাহলে নিচে বাটন এ ক্লিক করে ফর্মটি পুরোন কর</p>
            <p className="mb-5  text-xl text-black"><span className="font-bold text-xl">Aproximate ৩০০</span>  টাকা করে লাগবে</p>
            <p className="mb-5  text-left text-2xl font-bold text-black">খবরে আইটেম যা যা থাকছে এবং আনুমানিক খরচ তুলে ধরা হলো</p>
            <ul className="text-left">
              <li className="mb-5  text-xl text-black list-disc">বিরিয়ানি - <span className="font-bold text-xl">120</span></li>
              <li className="mb-5  text-xl text-black list-disc">হাফলিটার পানি - <span className="font-bold text-xl">20</span></li>
              <li className="mb-5  text-xl text-black list-disc">মহব্বতের শরবত <span className="font-bold text-xl">Aproximately per person 45</span></li>
              <ul className="mb-5">
                <label htmlFor="my_modal_7" className="btn">Ingredients For 20 people</label>
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal" role="dialog">
                  <div className="modal-box pl-10">
                    <li className="mb-5  text-xl text-black list-disc">তরমুজ 1pic - <span className="font-bold text-xl">200</span></li>
                    <li className="mb-5  text-xl text-black list-disc">কনডেন্সড মিল্ক 2 pic - <span className="font-bold text-xl">200</span></li>
                    <li className="mb-5  text-xl text-black list-disc">পানি 5 Lt - <span className="font-bold text-xl">150</span></li>
                    <li className="mb-5  text-xl text-black list-disc">চিনি 1/4 kg - <span className="font-bold text-xl">40</span></li>
                    <li className="mb-5  text-xl text-black list-disc">লিকুইডমিল্ক 1 Lt - <span className="font-bold text-xl">110</span></li>
                    <li className="mb-5  text-xl text-black list-disc">রুহআফজাহ 300ml - <span className="font-bold text-xl">200</span></li>
                  </div>
                  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
              </ul>

              <li className="mb-5  text-xl text-black list-disc">জিলাপি - <span className="font-bold text-xl">10</span></li>
              <li className="mb-5  text-xl text-black list-disc">পিয়াজু - <span className="font-bold text-xl">5</span></li>
              <li className="mb-5  text-xl text-black list-disc">বেগুনি - <span className="font-bold text-xl">5</span></li>
              <li className="mb-5  text-xl text-black list-disc">খেজুর - <span className="font-bold text-xl">per person 15 </span> 1kg 600 Aproximate 70-80 pic so 40 people can be served</li>
              <li className="mb-5  text-xl text-black list-disc">কলা - <span className="font-bold text-xl">Aproximate</span></li>
              <li className="mb-5  text-xl text-black list-disc">আপেল - <span className="font-bold text-xl">Aproximately per person 10 </span> 1kg 280 Aproximate 8-9 pic so 30 people can be served</li>
              <li className="mb-5  text-xl text-black list-disc">মাল্টা - <span className="font-bold text-xl">per person 10 </span> 1kg 300 Aproximate 7-8 pic so 25 people can be served</li>
              <li className="mb-5  text-xl text-black list-disc">ছোলাবুট - <span className="font-bold text-xl">10</span></li>
              <li className="mb-5  text-xl text-black list-disc">স্যালাড - <span className="font-bold text-xl">Aproximately per person 10</span></li>
              <ul className="mb-5">
                <label htmlFor="my_modal_4" className="btn">Ingredients For 20 people</label>
                <input type="checkbox" id="my_modal_4" className="modal-toggle" />
                <div className="modal" role="dialog">
                  <div className="modal-box pl-10">
                    <li className="mb-5  text-xl text-black list-disc">গাজর 1kg - <span className="font-bold text-xl">40</span></li>
                    <li className="mb-5  text-xl text-black list-disc">টমেটো 1kg- <span className="font-bold text-xl">100</span></li>
                    <li className="mb-5  text-xl text-black list-disc">শসা 1kg- <span className="font-bold text-xl">50</span></li>
                  </div>
                  <label className="modal-backdrop" htmlFor="my_modal_4">Close</label>
                </div>
              </ul>
              <li className="mb-5  text-xl text-black list-disc">সিদ্ধ ডিম - <span className="font-bold text-xl">15</span></li>
              <li className="mb-5  text-xl text-black list-disc">প্লেট গ্লাস - <span className="font-bold text-xl">8</span></li>
              <li className="mb-5  text-xl text-black list-disc">খাবার রাখার জন্য কাপড় ভাড়া নেয়া হবে  অথবা পলিথিন কেনা হবে <span className="font-bold text-xl">Aproximate</span></li>
            </ul>

            <button className="btn bg-orange-400 border-none text-xl p-3 text-black"><a href="https://docs.google.com/forms/d/e/1FAIpQLSekTRiz0vmVJAcNosrOSzU-ELCboj2EuasqAOt2m7nIscVJAA/viewform?usp=sf_link">ফর্মটি পূরণ কর</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
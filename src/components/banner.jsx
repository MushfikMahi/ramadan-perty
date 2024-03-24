
const Banner = () => {


  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Hqs54LH/golden.png)' }}>
        <div className="hero-content text-center text-white">
          <div className="p-5 md:max-w-md my-24 text-black space-y-10">
            {/* <h2 className="mb-5 text-5xl font-bold text-black">Iftar Party</h2> */}
            <div className="flex justify-center">
            <img className="h-40" src="https://th.bing.com/th/id/R.9dae8d5327e80a504392e5477065f620?rik=WOWYi74qI2IBIw&riu=http%3a%2f%2fwww.clipartly.com%2fwp-content%2fuploads%2f2017%2f11%2fOops-Speech-Bubble-Png.png&ehk=Z1l%2fuiT3AgDyKqd4d3GuxoSpc40z%2bs%2bAWxkkWcA9v8U%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>
            <h3 className="text-3xl font-bold">You misssed it bro !!!!</h3>
            <p className="text-2xl font-bold">If you have any query contact with me-</p>
            <p className="text-2xl font-bold">+8801408000789</p>
            {/* <p className="mb-5  text-xl text-black">আসসালামুআলাইকুম আমরা সবাই মিলে ২৫ মার্চ ইফতার করছি <span className="font-bold text-xl">CRB</span> তে তুমি যদি জয়েন হতে চাও আমাদের সাথে তাহলে নিচে বাটন এ ক্লিক করে ফর্মটি পুরোন কর</p>
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

            <button className="btn bg-orange-400 border-none text-xl p-3 text-black"><a href="https://docs.google.com/forms/d/e/1FAIpQLSekTRiz0vmVJAcNosrOSzU-ELCboj2EuasqAOt2m7nIscVJAA/viewform?usp=sf_link">ফর্মটি পূরণ কর</a></button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
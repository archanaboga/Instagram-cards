import React from "react";
import { img, pic, im, fire, kerala, fo, keralas, iim, ims } from "./pics";
import {
  BsChat,
  BsSend,
  BsHeart,
  BsThreeDotsVertical,
  BsBookmark,
} from "react-icons/bs";

const card = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 min-h-screen overflow-hidden">
      <div className="p-4  text-black">
        <h1 className="text-3xl text-center font-semibold">Instagram</h1>
      </div>

      <div className="flex flex-row justify-center mt-8  ">
        <div className="bg-white w-96 rounded-t-lg rounded-b-lg">
          <header className="px-4 py-3 flex items-center justify-between ">
            <div className="flex items-center">
              <span className="mr-2 ">
                <img className="h-10 w-10 rounded-full" src={pic} alt="pic" />
              </span>
              <span className="font-bold">
                Flowers
                <p className="text-sm font-normal ">Coppal House Farm</p>
              </span>
            </div>
            <button class="bg-gray-300 hover:bg-blue-600 text-white font-semibold py-1 ml-24 px-1rounded">
              Follow
            </button>

            <div className="float-right">
              <BsThreeDotsVertical className="" />
            </div>
          </header>

          <div className="">
            <img src={img} alt="pic" />
            <div className="p-2">
              <div className="flex items-center mb-2  ">
                <div className="flex items-center">
                  <span className="text-2xl mr-3 ">
                    <BsHeart className="" />
                  </span>
                  <span className="text-2xl mr-3 ">
                    <BsChat className="" />
                  </span>
                  <span className="text-2xl mr-3 ">
                    <BsSend className=" " />
                  </span>
                  <span className="text-2xl ml-56 ">
                    <BsBookmark className=" " />
                  </span>
                </div>
              </div>
              <div className="font-bold">2,560 Likes</div>
              <div className="">
                <span className="font-bold">Flowers</span>
                <span className="ml-1">
                  It's Sunflower Season! <br />
                </span>
                <span className="text-slate-500">
                  view all 19 comments
                  <br />
                </span>
                <span className="font-bold">Sunflowerclubs</span>
                <span className="ml-1">
                  So beautiful....
                  <br />
                </span>
                <span className="font-bold">photozone</span>
                <span className="ml-1">
                  wowwww
                  <br />
                </span>
                <span className="text-gray-500 text-sm">2 Hours Ago </span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <img className="h-8 w-8 ml-2 rounded-full" src={pic} alt="pic" />
              <input
                type="text"
                placeholder="Add a comment..."
                className="border border-gray-200 bg-white h-10 px-5 pr-32  text-sm focus:outline-none ml-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 ">
        <div className="bg-white w-96 rounded-t-lg rounded-b-lg">
          <header className="px-4 py-3 flex items-center justify-between ">
            <div className="flex items-center">
              <span className="mr-2 ">
                <img className="h-10 w-10 rounded-full" src={ims} alt="pic" />
              </span>
              <span className="font-bold">
                FUTURE KIIID
                <p className="text-sm font-normal ">Africa</p>
              </span>
            </div>
            <button class="bg-gray-300 hover:bg-blue-600 text-white font-semibold py-1 ml-24 px-1rounded">
              Follow
            </button>

            <div className="float-right">
              <BsThreeDotsVertical className="" />
            </div>
          </header>

          <div className="">
            <img src={im} alt="pic" />
            <div className="p-2">
              <div className="flex items-center mb-2  ">
                <div className="flex items-center">
                  <span className="text-2xl mr-3 ">
                    <BsHeart className="" />
                  </span>
                  <span className="text-2xl mr-3 ">
                    <BsChat className="" />
                  </span>
                  <span className="text-2xl mr-3 ">
                    <BsSend className=" " />
                  </span>
                  <span className="text-2xl ml-56 ">
                    <BsBookmark className=" " />
                  </span>
                </div>
              </div>
              <div className="font-bold">71,560 Likes</div>
              <div className="">
                <span className="font-bold">FUTURE KIIID</span>
                <span className="ml-1">
                  Elephants - The mega gardeners of the forest! <br />
                </span>
                <span className="text-slate-500">
                  view all 219 comments
                  <br />
                </span>
                <span className="font-bold">Thomas</span>
                <span className="ml-1">
                  Awesome
                  <br />
                </span>
                <span className="font-bold">mohit</span>
                <span className="ml-1">
                  Spectacular shot
                  <br />
                </span>
                <span className="text-gray-500 text-sm">12 August </span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <img className="h-8 w-8 ml-2 rounded-full" src={ims} alt="pic" />
              <input
                type="text"
                placeholder="Add a comment..."
                className="border border-gray-200 bg-white h-10 px-5 pr-32  text-sm focus:outline-none ml-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 ">
        <div className="bg-white w-96 rounded-t-lg rounded-b-lg">
          <header className="px-4 py-3 flex items-center justify-between ">
            <div className="flex items-center">
              <span className="mr-2 ">
                <img className="h-10 w-10 rounded-full" src={fo} alt="pic" />
              </span>
              <span className="font-bold">
                Aleksey Kuprikov
                <p className="text-sm font-normal ">Portland</p>
              </span>
            </div>
            <button class="bg-gray-300 hover:bg-blue-600 text-white font-semibold py-1 ml-24 px-1rounded">
              Follow
            </button>

            <div className="float-right">
              <BsThreeDotsVertical className="" />
            </div>
          </header>

          <div className="">
            <img src={fire} alt="pic" />
            <div className="p-2">
              <div className="flex items-center mb-2  ">
                <div className="flex items-center">
                  <span className="text-2xl mr-3 ">
                    <BsHeart className="" />
                  </span>
                  <span className="text-2xl mr-3 ">
                    <BsChat className="" />
                  </span>
                  <span className="text-2xl mr-3 ">
                    <BsSend className=" " />
                  </span>
                  <span className="text-2xl ml-56 ">
                    <BsBookmark className=" " />
                  </span>
                </div>
              </div>
              <div className="font-bold">10,420 likes</div>
              <div className="">
                <span className="font-bold">Aleksey Kuprikov</span>
                <span className="ml-1">
                  New foggy forests <br />
                </span>
                <span className="text-slate-500">
                  view all 75 comments
                  <br />
                </span>
                <span className="font-bold">artstudio</span>
                <span className="ml-1">
                  Amazing
                  <br />
                </span>
                <span className="font-bold">wisephoto</span>
                <span className="ml-1">
                  This is truly wonderful
                  <br />
                </span>
                <span className="text-gray-500 text-sm">29 May</span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <img className="h-8 w-8 ml-2 rounded-full" src={fo} alt="pic" />
              <input
                type="text"
                placeholder="Add a comment..."
                className="border border-gray-200 bg-white h-10 px-5 pr-32  text-sm focus:outline-none ml-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-6">
        <div className="bg-white w-96 rounded-t-lg rounded-b-lg">
          <header className="px-4 py-3 flex items-center justify-between ">
            <div className="flex items-center">
              <span className="mr-2 ">
                <img
                  className="h-10 w-10 rounded-full"
                  src={kerala}
                  alt="pic"
                />
              </span>
              <span className="font-bold">
                Hani hakkam
                <p className="text-sm font-normal ">Kerala</p>
              </span>
            </div>
            <button class="bg-gray-300 hover:bg-blue-600 text-white font-semibold py-1 ml-24 px-1rounded">
              Follow
            </button>

            <div className="float-right">
              <BsThreeDotsVertical className="" />
            </div>
          </header>

          <div className="">
            <img src={keralas} alt="pic" />
            <div className="p-2">
              <div className="flex items-center mb-2  ">
                <div className="flex items-center">
                  <span className="text-2xl mr-3 ">
                    <BsHeart className="" />
                  </span>
                  <span className="text-2xl mr-3 ">
                    <BsChat className="" />
                  </span>
                  <span className="text-2xl mr-3 ">
                    <BsSend className=" " />
                  </span>
                  <span className="text-2xl ml-56 ">
                    <BsBookmark className=" " />
                  </span>
                </div>
              </div>
              <div className="font-bold">1,791 likes</div>
              <div className="">
                <span className="font-bold">Hani hakkam</span>
                <span className="ml-1">
                  A trip to god"s own country! <br />
                </span>
                <span className="text-slate-500">
                  view all 63 comments
                  <br />
                </span>
                <span className="font-bold">beautycapture</span>
                <span className="ml-1">
                  Beautiful
                  <br />
                </span>
                <span className="font-bold">geeth</span>
                <span className="ml-1">
                  Nice Capture
                  <br />
                </span>
                <span className="text-gray-500 text-sm">5 hours ago </span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <img
                className="h-8 w-8 ml-2 rounded-full"
                src={kerala}
                alt="pic"
              />
              <input
                type="text"
                placeholder="Add a comment..."
                className="border border-gray-200 bg-white h-10 px-5 pr-32  text-sm focus:outline-none ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;

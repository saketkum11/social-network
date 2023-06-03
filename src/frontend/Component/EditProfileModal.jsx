import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../Slice/userSlice";

const EditProfileModal = ({ setEditModal, userProfile }) => {
  const [profile, setProfile] = useState(userProfile);
  const { bio, firstName, lastName, website } = profile;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    auth: { token },
  } = state;

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handleUpdateProfile = (userData, token) => {
    dispatch(editUser({ userData: userData, token }));
    setEditModal(false);
  };
  return (
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-slate-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
            <div className="bg-slate-800 px-4 py-3 flex justify-between border-b-2 border-cyan-800">
              <button
                onClick={() => {
                  setEditModal((flag) => !flag);
                }}
                className="inline-flex w-full justify-center rounded-md border-2 border-cyan-800  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
              >
                close
              </button>
            </div>
            <div className="bg-slate-800  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <form
                action=""
                className=" flex flex-col gap-4 text-white"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdateProfile(profile, token);
                }}
              >
                <div className="">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 "
                  >
                    FirstName
                  </label>
                  <div className="mt-2">
                    <input
                      autoComplete="email"
                      required
                      disabled
                      value={firstName}
                      className="block w-full px-4 rounded-md border-0 py-1.5 bg-slate-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 "
                  >
                    LastName
                  </label>
                  <div className="mt-2">
                    <input
                      autoComplete="email"
                      disabled
                      value={lastName}
                      className="block w-full px-4 rounded-md border-0 py-1.5 bg-slate-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium leading-6 "
                  >
                    Website
                  </label>
                  <div className="mt-2">
                    <input
                      autoComplete="website"
                      required
                      value={website}
                      name="website"
                      onChange={(e) => handleChange(e)}
                      className="block w-full px-4 rounded-md border-0 py-1.5 bg-slate-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium leading-6 "
                  >
                    Bio
                  </label>
                  <div className="mt-2">
                    <input
                      autoComplete="bio"
                      required
                      onChange={(e) => handleChange(e)}
                      value={bio}
                      name="bio"
                      className="block w-full px-4 rounded-md border-0 py-1.5 bg-slate-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md border-2 border-cyan-800  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EditProfileModal };

import {
  MdAccountCircle,
} from "react-icons/md";
import {useSelector} from 'react-redux'

function UserInfo(){

  const username = useSelector((state)=>state.user.username);

  return (
    <div className="mt-10 flex items-center gap-3 border-t border-gray-700 pt-4 mb-2">
     <MdAccountCircle className="text-5xl" />
     <div>
      <p className="text-sm text-gray-400">Logged in as:</p>
      <p className="font-semibold">{username.toUpperCase()}</p>
     </div>
  </div>
  )

}

export default UserInfo;
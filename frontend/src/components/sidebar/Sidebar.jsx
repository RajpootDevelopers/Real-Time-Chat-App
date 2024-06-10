import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { cn } from "../../utils/cn";
import useConversation from "../../zustand/useConversation";

const Sidebar = (props) => {
	const {selectedConversation, setSelectedConversation} = useConversation()

	return (
		<div className={cn('w-1/4 custom:w-1/2 customlg:w-1/3 border-r border-slate-500 p-4 flex flex-col h-screen', props.className, selectedConversation && ("sm:hidden " ))}>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;

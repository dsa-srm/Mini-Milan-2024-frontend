import useDelete from "@/features/Authentication/useDelete";
import useUser from "@/features/Authentication/useUser";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "../ui/use-toast";

const DeleteUserButton = () => {
  const { isLoading: isGettingUser, user } = useUser();
  const { isLoading: isDeleting, doDelete } = useDelete();
 const{toast} = useToast();
  function handleClick() {
	try {
		doDelete(user.id);
		toast({
			
			title: " Deleted ",
			description: "Account deleted successfully",
		
		});
		localStorage.setItem("isAuth", "false");
	} catch (error) {
		console.error("Delete error:", error);
		toast({
			variant:"error",
			title: "Account not deleted",
			description: "Something went wrong",
		
		});
	}
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button
            disabled={isGettingUser || isDeleting}
            className="bg-red-700/[.8] transition-all duration-500 text-white py-2 px-4 rounded-[.6rem] hover:bg-red-600/[.8] text-[1.5rem] font-bold font-unbounded tracking-tight  "
          >
            Delete Account
          </button>
        </DialogTrigger>
        <DialogContent className="min-w-[40vw]   ">
          <DialogHeader>
            <DialogTitle className="text-[2rem] font-['unbounded',sans-serif] ">
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription className="text-[1.5rem] py-2 ">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end max-md:flex-row max-md:justify-center max-md:gap-10">
            <DialogClose asChild>
              <Button
                type="button"
                variant="close"
                size={"custom"}
                className="text-[1.7rem]  text-center px-8 py-3  "
              >
                Close
              </Button>
            </DialogClose>
            <Button
              type="button"
              size={"custom"}
              variant="destructive"
              className="text-[1.7rem]  text-center px-8 py-3  "
              onClick={handleClick}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteUserButton;

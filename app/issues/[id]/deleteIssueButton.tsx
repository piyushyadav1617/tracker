'use client'
import {useState} from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast";
import Spinner from "@/components/spinner";
function DeleteIssueButton ({issueId}:{issueId:number}) {
  const router = useRouter()
  const { toast } = useToast();

  const [isDeleting, setIsDeleting] = useState(false) 

  const deleteHandler = async () => {
    setIsDeleting(true)
    try {
      await axios.delete('/api/issues/' + issueId);
      router.push('/issues/list');
      router.refresh();
    setIsDeleting(false)
      
    } catch (error) {
      setIsDeleting(false)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      return;
    }
   
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={'destructive'}>
          {isDeleting?
          <Spinner size={15} color="white" />
          :
          "Delete Issue"
        }    
          </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            issue.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteHandler} >Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default DeleteIssueButton
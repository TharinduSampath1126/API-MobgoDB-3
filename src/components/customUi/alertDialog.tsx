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

interface DeleteAllUsersDialogProps {
  userCount: number
  onDeleteAll: () => void
  triggerClassName?: string
  disabled?: boolean
}

export const DeleteAllUsersDialog = ({ 
  userCount, 
  onDeleteAll, 
  triggerClassName = "",
  disabled = false 
}: DeleteAllUsersDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className={triggerClassName} disabled={disabled}>
          Delete All Users
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete All Users</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete all {userCount} users? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onDeleteAll}
            className="bg-red-600 hover:bg-red-700 dark:bg-red-400"
          >
            Delete All
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

import Spinner from "@/components/spinner"
import { Skeleton } from "@/components/ui/skeleton"

 const Loading = ()=>{
    return (
        <>
        <div className="flex items-center justify-center h-[300px]"> 
          <Spinner color="#ea580c" size={60} />
        </div>
        </>
        
    )
}
export default Loading
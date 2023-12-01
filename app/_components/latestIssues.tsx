import prisma from '@/prisma/client';

import Link from 'next/link';
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { AvatarUser } from './avatar';


 async function  LatestIssues() {
    const issues = await prisma.issue.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        include: {
          assignedToUser: true,
        },
      });
    return (
      <div className='p-5 border border-border rounded-lg flex-1'>
        <h2 className='text-2xl font-semibold mb-4'>Latest Issues</h2>
        <div>
            {issues.map((issue)=>{
                return(
                    <div key={issue.id} className='flex flex-row justify-between items-center border-b border-border gap-2 py-2'>
                      <div className='flex flex-col'>
                      <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                      <div className='flex flex-row items-center'>
                       {issue.status==="CLOSED"?
                       <>
                       <CheckCircle2 className="mr-2 h-4 w-4 text-primary/60"/>
                       <span>Closed</span>
                       </>:
                       issue.status==="OPEN"?
                       <>
                       <Circle className="mr-2 h-4 w-4 text-primary/60"/>
                       <span>Open</span>
                       </>
                       :
                       <>
                       <Clock className="mr-2 h-4 w-4 text-primary/60"/>
                       <span>In progress</span>
                       </>
                        }
                        </div>
                       </div>
                       {issue.assignedToUser&&
                       <AvatarUser url={issue.assignedToUser?.image!}/>}
                       
                    </div>
                    
                )
            })}

        </div>
      </div>
    )
  }
  export default LatestIssues
  
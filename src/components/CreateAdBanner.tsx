import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner(){
    return(
        <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg'>
        <div className='bg-[#2A2634] flex justify-between py-6 px-6 rounded-md border-[#2A2634]'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>  
           
           <Dialog.Trigger className='py-3 px-4 text-white rounded bg-violet-500 hover:bg-violet-600 font-bold ease-in duration-200 flex items-center gap-2'>
              <MagnifyingGlassPlus size={24} />
              Publicar anúncio
           </Dialog.Trigger>
        </div>
      </div>
    )
}
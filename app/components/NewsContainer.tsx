'use client';

interface NewsContainer {
  children: React.ReactNode
};

const NewsContainer: React.FC<NewsContainer> = ({ children }) => {
  return ( 
    <div className="px-10">
      <div className="max-h-[70vh] w-full overflow-y-auto custom-scrollbar">
        {children}
      </div>
    </div>
   );
}
 
export default NewsContainer;

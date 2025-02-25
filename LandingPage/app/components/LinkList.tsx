import React from 'react';

interface LinkListProps {
  title: string;
  links: { name: string; url: string }[];
}

const LinkList: React.FC<LinkListProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col min-w-[240px]"> {/* flex flex-col grow shrink min-w-[240px] w-[266px] */}

      <h2 className="text-lg tracking-tight leading-none text-gray-300">{title}</h2>
      {links.map((link, index) => (
        <a href={link.url} key={index} className="mt-4 cursor-pointer text-gray-400">
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default LinkList;
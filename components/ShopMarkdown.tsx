import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';
import { MarkdownResult } from '../types';
// import ReactMarkdown from 'react-markdown';

export const ShopMarkdown = ({ children }: { children: MarkdownResult }) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }
          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          );
        },
      }}
    />
  );
};

// export const ShopMarkdown = ({ children }: { children: string }) => {
//     return (
//       <ReactMarkdown
//         components={{
//           a: ({ href, ...props }) => {
//             if (!href) {
//               return <a {...props}></a>;
//             }
//             return (
//               <Link href={href}>
//                 <a {...props}></a>
//               </Link>
//             );
//           },
//         }}
//       >
//         {children}
//       </ReactMarkdown>
//     );
//   };

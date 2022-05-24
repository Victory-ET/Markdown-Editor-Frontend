import { React, useState, useEffect } from "react";
import Nav from "./Nav";
import FileList from "./FileList";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


const Editor = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  


  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
A block quote with ~strikethrough~ and a URL: https://reactjs.org.
A block quote with ~strikethrough~ and a URL: https://reactjs.org. [apple](https://apple.com).

## hekko
# This ~is not~ strikethrough, but ~~this is~~!

* Lists
* [ ] todo
* [x] done

A table:

| head | tail   | mid  |
| ---- | ------ | ---- |
|      |        | yam  |
| app  | cheese | milk |
| rice | a      | b    |


`;
  return (
    <>
      <Nav />
      <div className="relative bg-slate-900">
        <div className="relative h-full flex flex-row pt-28">
          <FileList />
          <div className=" w-3/4 border border-slate-900 py-8 px-8">
            <button
              className="cursor-pointer relative text-blue-500 font-semibold text-md"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "Edit" : "Preview"}
            </button>
            {!show ? (
              // text area to type markdown
              <textarea
                className=" bg-slate-900 fullheight w-full relative outline-none text-white border-0 pt-6"
                placeholder="Write your markdown here"
                value={value}
                onChange={handleInputChange}
              />
            ) : (
              // preview window
              <div className="bg-slate-900 h-full w-full text-white editor">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {value}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
        {/* new file creation window */}
      </div>
    </>
  );
};

export default Editor;

import React from "react";

const CommentsData = [
  {
    name: "Akshay",
    commentText: "Video is awesome",
    reply: [
      {
        name: "John",
        commentText: "I agree!",
      },
    ],
  },
  {
    name: "Mary",
    commentText: "Nice video",
    reply: [
      {
        name: "Akshay",
        commentText: "Thank you!",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, commentText } = data;
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-3 mb-3">
      <img
        className="w-10 h-10 rounded-full mr-3"
        src="./images/user.png"
        alt="user"
      />
      <div>
        <p className="font-bold text-gray-800">{name}</p>
        <p className="text-gray-700">{commentText}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div className="border-t border-gray-300 mt-4 pt-4">
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          {comment.reply && (
            <div className="ml-8">
              {comment.reply.map((reply, replyIndex) => (
                <Comment key={replyIndex} data={reply} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="p-4 m-3 rounded-lg bg-gray-50">
      <h1 className="text-xl font-bold mb-3">Comments</h1>
      <CommentList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;

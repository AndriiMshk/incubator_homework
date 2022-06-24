import React from 'react';

type RequestPropsType = {
  success: boolean
  setSuccess: (success: boolean) => void
  request: () => void
}
export const Request: React.FC<RequestPropsType> = ({ success, setSuccess, request }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={success}
        onChange={() => setSuccess(!success)}
      />
      <button
        onClick={request}
      >request
      </button>
    </div>
  );
};
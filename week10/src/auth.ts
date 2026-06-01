import * as express from 'express';

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  if (securityName === 'jwt') {
    return Promise.resolve({
      id: 1,
      name: "테스트 유저"
    });
  }

  return Promise.reject(new Error("인증 실패"));
}
import { frontEnd } from './frontEnd';
import { backEnd } from './backEnd';
import { mobileApp } from './mobileApp';
import { ai } from './ai';
import { others } from './others';

describe('project data', () => {
  const all = [...frontEnd, ...backEnd, ...mobileApp, ...ai, ...others];

  it('has unique titles (used as React keys)', () => {
    const titles = all.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('has no placeholder links or entries', () => {
    all.forEach((p) => {
      expect(p.imgUrl).toBeTruthy();
      expect(p.repo).not.toBe('#');
      expect(p.demo).not.toBe('#');
      expect(p.title).not.toBe('Business Startup');
    });
  });
});

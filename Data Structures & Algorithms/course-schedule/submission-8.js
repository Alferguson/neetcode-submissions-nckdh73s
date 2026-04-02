/**
 * Asks:
 * - make sure there's no bi-direction between classes
 * - make sure there's no loops between classes
 * - number of UNIQUE classes === numCourses (ask interviewer if it can be less than or greater than)
 * 
 * Logic:
 * - create adjancy list from classes, key = course, value = prereq
 * - either do dfs on adj list 
 * - OR do check as iterating through params
 * - return false early if prereqs has same a and b 
 */

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        if (!numCourses || !prerequisites) {
            return false;
        }

        const listOfCoursesWithPrereqs = new Map();

        for (const [course, prereq] of prerequisites) {
            if (course === prereq) {
                return false;
            }

            if (listOfCoursesWithPrereqs.has(course)) {
                listOfCoursesWithPrereqs.get(course).push(prereq);
            }
            else {
                listOfCoursesWithPrereqs.set(course, [prereq]);
            }
        }
        const _dfs = (curNode, nodeNeighbors, hasAlreadyVisited = new Set()) => {
            if (!nodeNeighbors) {
                return false;
            }
            for (const n of nodeNeighbors) {
                if (n === curNode) {
                    return true;
                }
                else if (hasAlreadyVisited.has(n)) {
                    return false;
                }
                else if (listOfCoursesWithPrereqs.has(n)) {
                    hasAlreadyVisited.add(n);
                    return _dfs(curNode, listOfCoursesWithPrereqs.get(n), hasAlreadyVisited);
                }
            }
            return false;
        }

        for (const [curCourse, prereqs] of listOfCoursesWithPrereqs) { 
             if (curCourse == null) {
                return true;
            }

            if (!prereqs) {
                return true;
            }
            else {
                const doesCurCourseExistInPrereqs = _dfs(curCourse, prereqs);
                if (doesCurCourseExistInPrereqs) return false;
                listOfCoursesWithPrereqs.set(curCourse, []);
            }
        }

        return true;
    }
}

var LightBox = {
    CloseImagePath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8wNi8xMZANh+UAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAAIN3ByVld4nO2a227bRhCG90Dd6CkI9bYyKTm2Y8F2UTgIeuMiaAKk6J0i0Y5g6wBJgZ28SZ4lQHtf5F3yBk2X3NPscpdc2pLdAlrHckSR/OafmZ0dkvr7nz+/oQVafP/+/evXr58/f768vNzf30cIDUfX2Tp+l11NZqedb1/+6sST8Wnn7cFFerE4z95Pfvm0zF5/+vXN6NP16Hjc+emsfXI3uJsuptl6GN9Nb2arwd1pZziev8sG7P/55qQTF7usr087P+cfxL9fvIrP58ssPthLu6P0MI0Pe3u9/WdHR0c/xv20lyZpP+n1u72jwX5/kKaxGJ2zNns9WY4vB7+9eClw7N1p5/16vRgkye3t7d7t/t58eZX0jo+P89P0+122R3f1cbYe3nVnqx/4SeR5XmSr0XKyWE/mszh/P3w3/7A+7XTaMRhC13ShQLPVXqFxbzSfJnfDRdLbSxN15vzkbO/B+TIbrufLN/P5zRlX/nKyzG7ny+tVfP76IO6xo9jPs+fP4reT2Xh+uzpJ7ONcp8xesN8z5qheNz3qpodves8HB4eD/v4f4Hi+k3X4xXw8ufxYOvx4kD4fpIficLCTdFVi+eq+PhyPlAsXH5Y3RaTGoyS7yabZbL1ibuyZbhyPBpfz5XS4PptMh1dZsphdnSR6Y6V9fCvLFJakicpScPYYPfKIrbHj7/j/bz5+Uj5uaMI2/I8bmNCMjxEmhNCIRlErarERtdgbtglhbO4n/m2ajzGhhOGpxEcRzfkMr2hYe6DeAoBuP0A/tlB40/qZckZtVQxmCAZRwIVLbLsejV+gA7zQgJ9HPZQfikcq8BX8POdaldrliFr5XJAm5EbXBSFIPyWVyqEBVPELDxReqHJDEL+JfkqUfK3f74B6PqWh4sVgB0APaCMei08k38C7DdgqH2ME1bssqOGzdG4G5wPMAjXcDtg+n2i8w4L/sn52kDoj3xJFnmnIPuB7qC2YF8P8DyEgDR+bz6qnDIHLBZrcdvD16XjwKvlFgOX7Fq98RQkQBjgrUZV+uOApjzhMYJvUyqM3svWIbyJ5f0A8HqjiwwVP8JGHj0r8vEkRfEyIEQFoQ1P9rhDk+lGVfpUC5QyMzeVX82HySR8LH0TQBhF5p2+wXIVACCwDvPrZjm6NPj4q5wbkA3yQ/336uUyDL/1S4guDoX47Al5+ufJppUimARDvSgxRBjmfENccuBdfSYXBpz4+Lho4jwca8tVC2kg/8uL9fOeyD03I+2E1n92FUXRCOZ/qCBgp6Oe7um2YAphSVXZcVakFOjEKAoCMDGjMx1o/lQ2/0/mKj3NnEk8J8PIjn/+1fun/Gr7Sj5v4v2Klw/Bq270kaXNlMhFhguUABW7bfE/HH+WXWdCDPvE2n8IE3KD+PPk8HTLTYOvHROYfrua7z1gMqq8watrzqKV2ou4asF1+y/C/KwGs5XeL+i08rtNf2elZ8Q/Iv4JPS1PwPnyzggfnPyyBIfH3zT9TP3KufA79sgabJdA//1x3e4wWIK+/QfUPA/3B/q+p//yk3s7P4BdLhawA0gEP1M/XHxSiH+v4g/xz539b8Z39h6xcuv9SLYDLBaL/wVy/SgB4t9ar39N/2Xy1Hjv5mChXGSsAro+/W7/ki5qv+7+K/iv/zJoAXv9rfrn/F9td/b84mbv/Zl4Q8XcUYBX4Eh8jmy+7eWr3/9iThSI3iIw/XALr4u+6/tGTzbr+CNBvJUBt/BGYgvriz9np8thgsxfSixTVdBoefwRKUJWPrdj4+UYB1vFvV+iPIgDwd9ogN518IvmkQf3jp+OLkKhj1Z0mP6loB6IWUhe/Urw5/wLinwMLA/ithEB+UZdakWrTMdXyZf0N6D82rV8tgFhcA1Xzxee8CjIqO4EXrkzI4cVO+v4j1QOUn4DrL4PfisL4+Yw1+HLqh65/ko9Nfq4/CtLP94H6CZQPpp8r/9pAvzQh/OGLGPr+e55x9uwv9d+V8b8PXz2CMfieWyBuPgYW5A9/Hl+/YUPwXXjw/A3LmReViq/j+q9d4sOL9FA+S/4y38w+q/3364c9foOnENjiR7r68clHYPWr8T8MVHG2KjKV7Tgyqm5l9lXWHzhNeRNXWQD07RjNjwCeEnvtzUfbyzf1443pl09kA+IP9uT3+yr5EUW2/prJV+1/3mgb+7M3Yk5HxTcgeM21vv9gzHoBb37/VTgA2zd7RDdZLAb86x+UELiilfm69Fs3f7anPzLo9B73v5EoQVgNVDtKYS85P/z5AwwBsa2u4Nu+17ee658/tO3+wzCgAT/y6g9+/qMt4EPevjWnr7zsUNdYlnSj7mPr0Fq+kF88wcHeEIrPy573Tb3g+GsHEKXfjiAvk8SReQ79dvQlv+3jyymAZARIocjB8rP9D19D9OsUkPggCwj0fdDzb2/+qQwUj9E4vs4CohY9qL9kQIB+hMo2SDMcVgAwkQ2Hz/shfCMFLDyl+kXdZFGOh9rLmR+u3xkDrR9e4kgLbAOQ2/uh/jcXAkKAHwSK6r+SS/QR/uIdxMfAB/xhvomn4EUPbCae24TQ/OPdEJEGQO1UqYcewDD5PMFvMPgJYBRkTbQH+L6LY7l4kAlYfqOrEEZkScQaLZcJAgx4uHgkL4ewkYYSZ4g3HRD2JcwmZthWQGdj2/ObUG7izShUDFSZ9ven667YEC1/bbw4bpMD8xftCPmr2mWMNu55A68mIwJgJFUDv2/NAohHPvx26KYhGGmlj8K06XJOAPwj2qDteEoLdmM3dmM3dmM3dmM3dmM37jleoSG6QhmKUe+pTdmNJxj/AntX9ddL1tr8AAAASG1rQkb63sr+AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAppDOhAABCrG1rVFN4nO1dWXPbSJLG9ozbLZ/tno3Zh31RxO7GPpmLm8CjSIqSpimJQ1C25BcHL7S17aNHsjXjYeC/b2ZW4agiToqC6F60ZwQSBVQVvsz6KjMrCzz+uXOzfDXyLpeT4NXo+HKpBf1RN3EY/fXkcmlozmyiTfXgfND1l2pwwQ6vj3r+0rCCw6MxHUf7nr9s68HIO7uE4s4B1ODTf8FwMLhZdobwp7s3vl4qPyhTZaa8VTrKRLlWLpVZcHRyDOefwPmPcP4Qzl8pc2VXGUDpR2URjHqnU6x074Tq3oMuGwsn6PSOLpdm0DmGvi/gQE/S8fbpIq+Pj9DxDulbZ8AOP9Ohe8Ir2O/T99GYru136Ft/RIcTdtIbwrWzoDNmhWNW+9hjjRyz+tjhaA97eYK9UoPeqYbd6Z3qWE3v1KBDH07qcNDZwcBDUAKb5yvYjJRPyhc4N1cWyvy2CGnfPkKh9niAi698vo32aL65tv5ot0RHu1v9idG5pf7IGFXRoHvG6AnHaA/wuQIkOvD3C6D1jmP1A8cqxjAPHex3Ah7bZPhQeSE+jingowr4GLqI0PyWY0xnCOkMIZMhZDKEzMAbvmFS9Tz4MJvCiVP2GJ53SieqYPiYYzgG7foH6NsXKC/SM0NPU7R8IDWXQ6lPZxWgnDkMSjp/Z2Dqbjkwn3Ewu6Bw7+HfpfILwDVRflPeKV85oDsJpfwAnz8pn3LB1Pio1YzStK+pZvqwVXOGraUyJIkPEEl/Unrk6k5pLA1HZ1ga2rwydvkDuj1n0DkzhtxiQwaFmjdd6muSXTnI1gXorzBOL/EqASDTYgBpU0m3fA6RyjCa5Q1UVIti3SJCTOCEbIo4kVLdAVCruhUN1HUH6AhKpzRAP+aqmeZuVs82O6nejZ59zzF6DXPB51R02pKKSUZHnl2Gtwr46PeOjzfsMPb3Oiuk/zjC6x3Z9DPQGEBO0qYuzZtI+V9L0T3HS9NnqYhJhN+eVVcp02aQTThmxtwsPXeuPyihQd2aMCBxqqmO5JDI/zOg+b4Skr5ZYub0w5kT7YmSQEbcxoEkm2TzOCJ8XmiNILkxsyT8gMgyuyT8MKoM8UPRuagCL80Zhe4EqXNlfBfcMsGbEWDX3jTAI8BVXywYZvKkkY/ZOgZyOinqVq6BPNOrj/HIPLZ0Bh3DsBx22qI0NUaKp/sCdDsRdDiDfKW5dB3fTHTNyEVYM/ZRZiDrDrdSyCkpiZahp6FlM7RshpbNhjIjQPww9aWhjHPM6LACjg8ja2Wi/FoQI3EYii5DkUy0BIrqbVE0GYpMxVJhtCYMRz0HR0vlYQCXxwFcjiRXPJtrnm1mgcnOJMAEo7OaUo5hpINKKr9WGcWltLKc9ZyuljSYcaKebpz/aIKhMRwCOUrONGzuKVbPHg3md8R/YrgqUVJ60KdGEbYgXKWtGa7KRunHVJR6FNibggmeP6y3FSe9JpzGMI4vwT35VnEyNo7TToTTJ7BIPtcYGM7jMXdmrumk8SlBZdCoDBqVQaMyaNSS0DxLVSG+GlNdfUSuV+tffckjI4shZDGErFtR9iF5rzcF3uu2rjBwlGDGJpgsBpPFYJowmCYMpkmq7d9Hd5OWW8bINSnKdAXm165yzD8tlKsyplgV00GzFmUWG9RUJ7/ykEs3HLg56zCoHGb8s7WG7MBIPnaHFGB6xwNN74itROzQaqSwJXpAJE1VMGSZ37RiyKYORtLFshHxyZ1iVx6qcEQOIoiyFU2Ov83SRiRGrTNpK/bR1wgm3ZmeJe36OJKElipFkpxFBTwfCmb+x82uuZdcyJKmxhqGaQQW4pgE63sO1ikuGXCIHkXuOdpWGG4rsq4m6yYnoDdTBJMhuZahKxSG2kihVxxLrUQ4A8+ShcXB0h3m+5Cns0cOGymfbTPPx8QjhRMLMXyRwBAjRpjs4ZGdOuFWWf4cMUkNsJWAFCNZOUszswkDVeegznQpvjbnMSI2cRd4mKC6DFaH4+owYGcOA3bGgZ05sr+OH0bhB2GAs6LoQxhgGo64TzoahSFObzVclyaKMEhXC/zGvBT8UoguQj933TUjVmJyu89k2IOBRNjT0aAjIc1QTEWaJnEEmBR9xBS/LLyPIng/U0wFk1Guy9g/4aJ2mGyhTRYl8C1j/1gSY4jMinzrUaJcNri2WQ3cEDjNj2IkBKBezBR/So8h83SMcvzbXpN/S01TPLTnT6QcAQ6nORXo10yj3xBOmScs7sdZ3JGDo5h0waJQIwaoN+LUzL8j0JqfSsmhhzMEKD/Cp1V11ZSXUHoJkBeuJYnr5GtHn/N8vwo2gKiozrqBg1Vk/i0NGVDDPTj7Gb6/hE9oqKNnWLjIsVnMNms3bRCzcJrvwiT/Hv4fDt3klWnuDLktmSbmpHpgoYKBWX6KKQUUjVPkv9W5BS1PLPHYsRyk4XR9ECUeXOKEfTfpw7PyZnqlbDPJ+uT0N2FAThiQzoqhzk3PZLaZAGgSwKccwNdk0Sz40iTpoLSgUS56I+XtRX51uQAOLjFW1MbI5iGT6VbLkqlIRmvm8UIbxSrCD6PTxLStstlEUtLyGJdbNNKdND1lAaANIhyuGRnhuq9VHuB0n9JIWzOikZ019qvBWMUp97n16IvWoz8pAWIZd/O2AaB0FdXTEGReedILihbb5AzJkC9H3ML+pHyQ+BKnoI+Kj0lZOF2nYahZJsPQFjGcVIDQTtXDVKOGLf2uY9WEWigSps7VkI4GHdnotfnwLQ9aqHBskSTfXTHSBq2UJpk+u6jlrWvi21Wspmbxonnkq0iL5kiwhBf7YLAPzL52Fty+xg/DEEMvdP1GIUeyoEc5TMO8wD66MGmITk3BuQ61r4p3nTtfE4ZpyQjp/h/H1EjDdOakOywuj665PKnDtVmkiNyScI28E7sp4Zq5FB3PBjH2pv8GME7IoMxXT2td26fCjMJ8vkTsrUIWFviHqeqJ5/v8fJ+dj6Ck2brNJ+s209AQUlLQQ+YaVhvsF4Rn/uwiztCl8gar2JJcM6epi6GSJ506u2QFJrIyZMQMTK6K5DFn7AU5A6g+0kT9hQzw0Cx/wEE0lN4a6W3tMvtoyrg0hmjiiACCqqSEIsqFzXQnJRZ8yOboKjg9inECP/CAzJy/5yOWOsGU23oUQqYV69wsdYLRFmlkqNUK2ZPIgnlHSdIYdlispN7LsNnrrjlo5VcBI1/FsKsnBYaGYJHXdxiazoerpnMRdC+iOfc97fqousyQvkJ4e9WjfPLEOsMk1ZoOla9MJFaeiVOVL7RoRtFiwaoBU3YAn8L5zxTwKtp+uokBbJUPwEoYusWTRpieKpnTGxq+oQ5ibv4lxQrvXAdXMimNVCV0HXGxy0+dNdLXD6UE31k6BabZg3IYJ17m4lZMMo7N1BUesG2xadmupq1PI8/5E7ky7wB4vkUiX2c3lxCXN087qVvkMA6SQFyvsgKTpbXMvvFWncAiBJ8lEPwHBXF2KVJRGUMKDFbY7BrhaBa70muvD6CvXGISoiDErJ2SkE5JPnQi/BAuvwy5MYmPyBZkE9alvHJYJIU/cym8ohWvGWW/XtPiAzIwxoh3Y4KpTidsK1VZxU5lE1GxJWuKQm2rXFLJAjV4jMjgoXU4Epdw8STntyEXjhDMJGkllsoccaUM7f2gP+jdLPvJNw34JBaPAnKXiSRSn8RxQmsaH0hQZ5klXBx9BkifcUOf4dDfJy3uj3p0yWjEyg7Z4RwPQT/pxbEO8dc+oMcmdSlZcpZZsl6XdNYlOBxEPXoB/ZlF6xFzro2fE0s+1xEXz3jOB059M+VX4JFw9aJ/8AqAP+myyo/g88EQ38DSZ69YUem/IFGkhUX8/StYdoFl6u3r0dasIiyC7wRdIIjuMRddl94mMIMB/D5FfCMO4qpGJUvWE5/BxGc04ltDfM+4+EYA0AweGqMov0hCfBaJKu2asxLXrCfYCRPspBHsGoJ9FI1LXCBAAyfp7PiJxYOw7CynbD0BmkyAZiPAW4xMJojPZBtdhbBJIzP9mrMS19yKcjWtkewako3Nrwml2MR7EX2+ChCeP8s4v57ULCY1qxHaLYQ2JHNzlnjjlM/jIOH5s4zz6wmtzYTWboR2C6H1CZh5BEsonPj8Wcb59YTmMKE5jdDWENpTLrR9/i6a34j0kvbLUy6mtCvOCq9YT6QuE6nbiHQNkT7kIu3QWux1tELrRy+EuIrGoHx2PXHNmLhmjbjWENdO5BTiyGHbrGV/Pi6R/fm4ZD3RzZno5o3objHjvabkz8XKjBefP8s4v57QFkxoi0Zot/DVh/HaWeQUPIrsyGTZWU7ZegL0mQB9oWNPIm1aKFOlRxJ5R0t74Rp+qD1y+VlB+Xqd1Hj0GI89LQFsv6cL3wzhmyl8GzMBHFBQfB1t/TGhrV/gqhGl/19QBgNL/Ih11khVFFdVp3pSUdSWFWtbniLOuBYJCn1XjWxO29fC+YWEcwLh8FwW0q24L1NVn0yyYJj7UCwWuvKduWhvuKF7RjzU7H3Kx6GVOkouOaCMRLgrgbed1kVdNWZiF9WW7oSl2tRta1Ox1Iww0hamD9+EUjsstCeLmaqJhW0ru2JN7pEsxW+v+/esGztcN7AEDTxk8VgbzLROuW3T1qQhYURDYjp3ZhJeTlRqz/SFZqc+z8KfT2fzVYneTxfuWSqPuFQSr8iEsoJRCs9m23aWmjuqo6K5k67mts2MoVQ1xxvbfpaas4YzJp02/K/kKN3q7m+JPjCbZHWWTO1WjjUQWhGyYG5Rz5bwmEevy76ReCxV4VzDhf5nKZyp478shZtaU2OqZSicba9qcqxw8wX+S8UCldwpO6ttdffvWRseR9rwG1+5xh9D+FDMoHLHANJk4QoDxf3WJ5kEhPfJ1TpBgn8ybfYIjDL0ua19v2dd+H8YhVgLp2cJS3BKPsJnem+FPNekap+qGo6sQzEZgYa5k3YWGcEUYufo3+qt7ZxbNblHpQbPVnf/nvXiuWB7RD5jka+ex0sJADIJBO9Kk99dNbIlKGPO7CfaM/NZOeXv4PmlmKl0V51YbpYVm+oq36KeLWH0iMdjbi/CKaTb/M6VsYnL1LPBuPJ+v3ez3O8nllMXhNYR5WBjVKcDf2/oBTgMpZ8IP7SBPkT7Cdj1ZB3zt8nuD72bZa+7j39+hrv+G67+Ffi/T3b0glC+4iifwr3vla8Ke7/RB7CtPpGsruDcvuLTfnW0tc7g+hO2+yvodV+RPRb3czfR0yDR8nOhjiPwe1n++CV/czKr6Y/cllsI9z6N64wyoq6Y78zv+05pK5Z0zz5oGYwtelMB7c2FI2UI8Hv+RVGlO/ZoNCIu4c+2faT7rqM7DOGOJ/R6x2tANOt6uYX41ZA9/r6oCSWahM//B0VTVOmu51D7e4rfLKC9LzRzs/coX5IfFLalSXexXVGC7sSjjd/1UPkPQMnHNlfafUZb7v/O5wLUtvnK/Ttwv5r4Zyi+9MSHpF35NfiJf3INzymuiT/vA7iC3iIPLAr7IT/LY0H7juk9f0dKj9/9X8oS9AdLbcAfJaArL+EztoSf8NycXrbkwLk2lLA2LLqyDX81KMFvgdDqTgL5MYyi3yI5y5rxKHHla9ocCOM50m1t5epYjyKdTWiQIY2FnYQGyf3QJZwOiRkYI6RpS0JW0p0e7Qmdk86k3Zklm0d0J951CnL+XyYjft8DaAdt1WuJER4DXl9o+QzZwKNx9DkT3Z1wc+8KtvKVL6IrWZ1XmSOV7kTirsDZDzln99mGu4adG3Zu2Llh5xx2lnFq2Pnu2XlEyb+/NOzcsHPDzg0757Cz1bBzbey8E7HzF0IQpdYwdMPQDUM3DJ3N0HbD0LUzdCIi3TB0w9ANQzcMncPQWsPQtTH0I87Qb0h6b6DGXxS94eiGoxuObjg6h6PNhqNrt6ITHN0wdMPQDUM3DJ3D0EbD0Btm6JRxt5WZd3E/G85uOLvh7GLO1raEs5vMu/o4+74y7xp2bti5YedvkZ2bzLv62bnuzLuGnRt2btj5W2TnJvOuPna+z8y7hqEbhm4Y+ltk6Cbzrn6Gvo/Mu4ahG4ZuGPpbZOgm864+hr7fzLuGoxuObjj6W+ToJvOufiv6PjLvGoZuGLph6G+RoZvMu00zdA/uQqwTeEjrhJwtamPnsEe7Qp82xc7FY2sCY8RVTPg3h/qcjYytfH2T+cCW4nmPhLuLsmKT17L3isas6+T0anVsGvA0lsSyyTvSdQ0ZQK+sbc+5tsVvFn4rXNVoX13aN5Fy5TanfbJ9fRfa9y9KW9K9Z1z3kjOzbI3+wLUP84qBvWtjuydxi6BxiR421qikhY01Wpc1qlXmrLqtUUPinGxrVNaiJmdtG23RKgw9gtou6anqYeincYvKvOHohqO3gqO3P2Ig827D0d82Rz8XENil69nvHr5PeHFPhF3N9ftv2e3X58FZfPz4NHJwfLXhnwnXhyPNgE/4qzDYt1BrHBqbPvl9ON5u58FZKTr47Xpw5XTvkSD7sKwevUtvu077wJaQLp67zTXn0/XnIJ203oHRoMFng+YbHf6ptxgZeexn1sx+zwnr99QPgX2UFv6rSReLepHE5N9BTh1ow6ceMOm/hbauSAPQ/vo7fP8c9Q/19Z9RSw9Ibrv4t6ImTBUXZDmDv2hVLMgaMclSCzUBI1+oBz7pB2M1vBo1Bpl1DteLmvBAmUgM9B1cY0nXzArsM1mrf1DmpaOcT4AD5zDHf6HrdxOjJ2So+Pd3drnU369oxYNMyyRt1D0ETfmNrEbUm685dvZdMV/aM9U3287hnwVyRh2fEZNMyGZ1JU5x4exEsGvJFqco6yLFrg3teczxnOcwQ5HMv0++q6AmBhDb3IbxPge8UUrI+y55GmgbzWHUy96HE41",
    MaskImagePath: "images/MaskBGBlack.png",
    JObjRow: function () {
        this.Body = null;
        this.Caption = null;
    },
    PicIndex: null,
    JObj: null,
    Image: function (ImagePath, Caption) {

        var objElement = document.body;
        var newdiv = document.createElement("div");
        newdiv.setAttribute("id", "LightBox");
        newdiv.innerHTML = "<div style='width:100%; height:100%; position:fixed ; z-index:-1' onclick='LightBox.Close()'></div><br><br><br><br><table width='0' border='0' align='center' cellpadding='10' cellspacing='0' bgcolor='#FFFFFF'>" +
             "<tr>" +
             "<td>" +
             "<div style='position:absolute; margin-top:100px; margin-left:-25px;cursor:pointer;'></div>" +
             "<br><br><img onclick=\"LightBox.Close()\" class=\"img-responsive img-thumbnail\" src='" + ImagePath + "'  /></td>" +
                 "</tr>" +
                 "<tr>" +
                    "<td valign='top' style='font-family:Ebrima; font-size:14px;'>" + unescape(Caption) + "</td>" +
                "</tr>" +
            "</table>";
        newdiv.style.width = "100%";
        newdiv.style.height = "100%";
        newdiv.style.background = "url(" + LightBox.MaskImagePath + ")";
        newdiv.style.position = "fixed";
        newdiv.style.marginTop = "0px";
        newdiv.style.marginLeft = "0px";
        newdiv.style.overflow = "auto";
        newdiv.style.zIndex = 99;
        objElement.parentNode.insertBefore(newdiv, objElement);
    },

    HTML: function (escapedHTML, Caption) {

        var objElement = document.body;
        var newdiv = document.createElement("div");
        newdiv.setAttribute("id", "LightBox");
        newdiv.innerHTML = "<div style='width:100%; height:100%; position:fixed ; z-index:-1' onclick='LightBox.Close()'></div><br><br><br><br><table width='0' border='0' align='center' cellpadding='10' cellspacing='0' bgcolor='#FFFFFF'>" +
             "<tr>" +
             "<td>" +
             "<div style='position:absolute; margin-top:-25px; margin-left:-25px;cursor:pointer;'><img src='" + LightBox.CloseImagePath + "' onclick='LightBox.Close();' /></div>"
              + unescape(escapedHTML) + "</td>" +
                 "</tr>" +
                 "<tr>" +
                    "<td valign='top' style='font-family:Ebrima; font-size:14px;'>" + unescape(Caption) + "</td>" +
                "</tr>" +
            "</table>";
        newdiv.style.width = "100%";
        newdiv.style.height = "100%";
        newdiv.style.background = "url(" + LightBox.MaskImagePath + ")";
        newdiv.style.position = "fixed";
        newdiv.style.marginTop = "0px";
        newdiv.style.marginLeft = "0px";
        newdiv.style.overflow = "hidden";
        newdiv.style.zIndex = 99;
        objElement.parentNode.insertBefore(newdiv, objElement);
    },

    Close: function () {
        document.getElementById("LightBox").parentNode.removeChild(document.getElementById("LightBox"));
    },

    ImageObject: function (JObj, PicIndex) {

        LightBox.JObj = JObj;
        var TotalPic = LightBox.JObj.length;
        LightBox.PicIndex = PicIndex;
        var objElement = document.body;
        var newdiv = document.createElement("div");
        newdiv.setAttribute("id", "LightBox");
        newdiv.innerHTML = "<div style='width:100%; height:100%; position:fixed ; z-index:-1' onclick='LightBox.Close()'></div><br><br><br><br><table width='0' border='0' align='center' cellpadding='10' cellspacing='0' bgcolor='#FFFFFF'>" +
             "<tr>" +
             "<td colspan='3'>" +
             "<div style='position:absolute; margin-top:-25px; margin-left:-25px;cursor:pointer;'><img src='" + LightBox.CloseImagePath + "' onclick='LightBox.Close();' /></div>" +
             "<img id='LightBoxImgHolder' src='" + LightBox.JObj[LightBox.PicIndex].Body + "'  /></td>" +
                 "</tr>" +
                  "<tr style='font-family:Ebrima; font-size:12px'>" +
                    "<td align='left'><div id='LightBoxPrevButtonDiv' onclick=\"LightBox.SwitchImage('prev')\" onmouseover=\"LightBox.onMouseOver('prev')\" onmouseout=\"LightBox.onMouseOut('prev')\" style='cursor:pointer'>&lt; PREV</div></td>" +
                    "<td align='center'>Image <span id='LightBoxImageIndexSpan'>" + (LightBox.PicIndex + 1) + "</span> of " + TotalPic + "</td>" +
                    "<td align='right'><div id='LightBoxNextButtonDiv' onclick=\"LightBox.SwitchImage('next')\" onmouseover=\"LightBox.onMouseOver('next')\" onmouseout=\"LightBox.onMouseOut('next')\" style='cursor:pointer'>NEXT &gt;</div></td>" +
                "</tr>" +
                 "<tr>" +
                    "<td valign='top' colspan='3'><div id='LightBoxImgCaptionDiv' style='font-family:Ebrima; font-size:14px;'>" + unescape(LightBox.JObj[LightBox.PicIndex].Caption) + "</div></td>" +
                "</tr>" +
            "</table>";
        newdiv.style.width = "100%";
        newdiv.style.height = "100%";
        newdiv.style.background = "url(" + LightBox.MaskImagePath + ")";
        newdiv.style.position = "fixed";
        newdiv.style.marginTop = "0px";
        newdiv.style.marginLeft = "0px";
        newdiv.style.overflow = "auto";
        newdiv.style.zIndex = 99;
        objElement.parentNode.insertBefore(newdiv, objElement);
    },

    SwitchImage: function (Direction) {
        var TotalPic = LightBox.JObj.length;
        var nextDiv = document.getElementById('LightBoxNextButtonDiv');
        var prevDiv = document.getElementById('LightBoxPrevButtonDiv');
        if (Direction == "next") {
            if (LightBox.PicIndex < (TotalPic - 1)) {
                LightBox.PicIndex = (LightBox.PicIndex + 1);
            }

        }
        else {
            if (LightBox.PicIndex >= 1) {
                LightBox.PicIndex = (LightBox.PicIndex - 1);
            }
        }

        if (LightBox.PicIndex == (TotalPic - 1)) {
            nextDiv.style.visibility = "hidden";
        }
        else {
            nextDiv.style.visibility = "visible";
        }
        if (LightBox.PicIndex == 0) {
            prevDiv.style.visibility = "hidden";
        }
        else {
            prevDiv.style.visibility = "visible";
        }

        var ImageHolder = document.getElementById('LightBoxImgHolder');
        var ImageCaption = document.getElementById('LightBoxImgCaptionDiv');
        var ImageIndex = document.getElementById('LightBoxImageIndexSpan');

        ImageHolder.src = LightBox.JObj[LightBox.PicIndex].Body;
        ImageCaption.innerHTML = unescape(LightBox.JObj[LightBox.PicIndex].Caption);
        ImageIndex.innerHTML = (LightBox.PicIndex + 1);
    },

    onMouseOver: function (Direction) {
        var nextDiv = document.getElementById('LightBoxNextButtonDiv');
        var prevDiv = document.getElementById('LightBoxPrevButtonDiv');
        var TotalPic = LightBox.JObj.length;
        if (Direction == "next") {
            if (LightBox.PicIndex < (TotalPic - 1)) {
                nextDiv.style.color = "#666666";
            }

        }
        else {
            if (LightBox.PicIndex >= 1) {
                prevDiv.style.color = "#666666";
            }

        }
    },

    onMouseOut: function (Direction) {
        var nextDiv = document.getElementById('LightBoxNextButtonDiv');
        var prevDiv = document.getElementById('LightBoxPrevButtonDiv');

        if (Direction == "next") {
            nextDiv.style.color = "#000000";
        }
        else {
            prevDiv.style.color = "#000000";
        }
    },

    HTMLObject: function (JObj, PicIndex) {

        LightBox.JObj = JObj;
        var TotalPic = LightBox.JObj.length;
        LightBox.PicIndex = PicIndex;
        var objElement = document.body;
        var newdiv = document.createElement("div");
        newdiv.setAttribute("id", "LightBox");
        newdiv.innerHTML = "<div style='width:100%; height:100%; position:fixed ; z-index:-1' onclick='LightBox.Close()'></div><br><br><br><br><table width='0' border='0' align='center' cellpadding='10' cellspacing='0' bgcolor='#FFFFFF'>" +
             "<tr>" +
             "<td colspan='3'>" +
             "<div style='position:absolute; margin-top:-25px; margin-left:-25px;cursor:pointer;'><img src='" + LightBox.CloseImagePath + "' onclick='LightBox.Close();' /></div>" +
             "<div id='LightBoxHTMLHolder'>" + unescape(LightBox.JObj[LightBox.PicIndex].Body) + "</div></td>" +
                 "</tr>" +
                  "<tr style='font-family:Ebrima; font-size:12px'>" +
                    "<td align='left'><div id='LightBoxPrevButtonDiv' onclick=\"LightBox.SwitchHTML('prev')\" onmouseover=\"LightBox.onMouseOver('prev')\" onmouseout=\"LightBox.onMouseOut('prev')\" style='cursor:pointer'>&lt; PREV</div></td>" +
                    "<td align='center'>Image <span id='LightBoxImageIndexSpan'>" + (LightBox.PicIndex + 1) + "</span> of " + TotalPic + "</td>" +
                    "<td align='right'><div id='LightBoxNextButtonDiv' onclick=\"LightBox.SwitchHTML('next')\" onmouseover=\"LightBox.onMouseOver('next')\" onmouseout=\"LightBox.onMouseOut('next')\" style='cursor:pointer'>NEXT &gt;</div></td>" +
                "</tr>" +
                 "<tr>" +
                    "<td valign='top' colspan='3'><div id='LightBoxHTMLCaptionDiv' style='font-family:Ebrima; font-size:14px;'>" + unescape(LightBox.JObj[LightBox.PicIndex].Caption) + "</div></td>" +
                "</tr>" +
            "</table>";
        newdiv.style.width = "100%";
        newdiv.style.height = "100%";
        newdiv.style.background = "url(" + LightBox.MaskImagePath + ")";
        newdiv.style.position = "fixed";
        newdiv.style.marginTop = "0px";
        newdiv.style.marginLeft = "0px";
        newdiv.style.overflow = "hidden";
        newdiv.style.zIndex = 99;
        objElement.parentNode.insertBefore(newdiv, objElement);
    },

    SwitchHTML: function (Direction) {
        var TotalPic = LightBox.JObj.length;
        var nextDiv = document.getElementById('LightBoxNextButtonDiv');
        var prevDiv = document.getElementById('LightBoxPrevButtonDiv');
        if (Direction == "next") {
            if (LightBox.PicIndex < (TotalPic - 1)) {
                LightBox.PicIndex = (LightBox.PicIndex + 1);
            }

        }
        else {
            if (LightBox.PicIndex >= 1) {
                LightBox.PicIndex = (LightBox.PicIndex - 1);
            }
        }

        if (LightBox.PicIndex == (TotalPic - 1)) {
            nextDiv.style.visibility = "hidden";
        }
        else {
            nextDiv.style.visibility = "visible";
        }
        if (LightBox.PicIndex == 0) {
            prevDiv.style.visibility = "hidden";
        }
        else {
            prevDiv.style.visibility = "visible";
        }

        var ImageHolder = document.getElementById('LightBoxHTMLHolder');
        var ImageCaption = document.getElementById('LightBoxHTMLCaptionDiv');
        var ImageIndex = document.getElementById('LightBoxImageIndexSpan');

        ImageHolder.innerHTML = unescape(LightBox.JObj[LightBox.PicIndex].Body);
        ImageCaption.innerHTML = unescape(LightBox.JObj[LightBox.PicIndex].Caption);
        ImageIndex.innerHTML = (LightBox.PicIndex + 1);
    }
}
        
        

